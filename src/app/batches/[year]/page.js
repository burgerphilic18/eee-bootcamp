import { batches } from '@/lib/data';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import BatchContent from '@/components/shared/BatchContent'; 
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return batches.map(batch => ({ year: String(batch.year) }));
}

export async function generateMetadata({ params }) {
  const { year } = await params;
  const batch = batches.find(b => String(b.year) === year);

  return batch
    ? {
        title: `Batch of ${batch.year} | EEE Bootcamp`,
        description: `Meet the students, view achievements, and see the gallery for the ${batch.year} EEE batch.`,
      }
    : { title: 'Batch Not Found' };
}

export default async function BatchPage({ params }) {
  const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/access-denied');
    }

    const { year } = params;
    const batch = batches.find(b => String(b.year) === year);

    if (!batch) {
        return (
            <div className="flex-grow">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Batch Not Found</h1>
                    <p className="mt-4 text-lg text-gray-800">
                        Sorry, we couldn't find the batch you're looking for.
                    </p>
                    <Link href="/batches" className="mt-8 inline-block">
                        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded">Back to all batches</button>
                    </Link>
                </div>
            </div>
        );
    }

  return (
    <div className="bg-yellow-100 min-h-screen"
    style={{ backgroundImage: "url('/bg.png')" }}>
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
        <BatchContent batch={batch} />

      </main>
    </div>
    </div>
  );
}

