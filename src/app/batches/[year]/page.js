import Link from 'next/link';
import Button from '@/components/ui/Button';
import BatchContent from '@/components/shared/BatchContent';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { authOptions } from '@/lib/auth';

export async function generateStaticParams() {
    const { data: batches } = await supabase.from('batches').select('year');
    return batches?.map(batch => ({ year: String(batch.year) })) || [];
}

async function getBatchData(year) {
    const { data, error } = await supabase
        .from('batches')
        .select(`
            year,
            description,
            students (*),
            highlights (*),
            gallery_images (*)
        `)
        .eq('year', year)
        .single();
    if (error) console.error("Error fetching batch data:", error);
    return data;
}

export async function generateMetadata({ params }) {
    const { year } = params;
    const batch = await getBatchData(year);
    return batch
        ? {
            title: `Batch of ${batch.year} | EEE Bootcamp`,
            description: `Meet the students, view highlights, and see the gallery for the ${batch.year} EEE batch.`,
          }
        : { title: 'Batch Not Found' };
}

export default async function BatchPage({ params }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/access-denied');
    }

    const { year } = params;
    const batch = await getBatchData(year);

    if (!batch) {
        return (
            <div className="flex-grow">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Batch Not Found</h1>
                    <p className="mt-4 text-lg text-gray-800">
                        Sorry, we couldn't find the batch you're looking for.
                    </p>
                    <Link href="/batches" className="mt-8 inline-block">
                        <Button>Back to all batches</Button>
                    </Link>
                </div>
            </div>
        );
    }

    // This is the fix. We are mapping over the students array to rename the
    // database columns to match what the component expects.
    const formattedBatch = {
      ...batch,
      students: batch.students?.map(student => ({
        ...student,
        linkedin: student.linkedin_url, // Renaming linkedin_url
        instagram: student.instagram_url, // Renaming instagram_url
      })) || [],
      highlights: batch.highlights || [],
      gallery: batch.gallery_images?.map(img => ({ src: img.image_url, alt: img.alt_text })) || [],
    };

    return (
        <div className="flex-grow min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <main className="container mx-auto px-4 py-12">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
                            Batch of <span className="text-pink-500">{batch.year}</span>
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
                            {batch.description}
                        </p>
                    </div>
                    <BatchContent batch={formattedBatch} />
                </main>
            </div>
        </div>
    );
}

