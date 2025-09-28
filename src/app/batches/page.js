import Card from '@/components/ui/Card';
import { supabase } from '@/lib/supabaseClient';

// This function now fetches the data directly from Supabase
async function getBatches() {
    const { data, error } = await supabase
        .from('batches')
        .select('year, description')
        .order('year', { ascending: true }); // Sort the batches

    if (error) {
        console.error('Error fetching batches:', error);
        return [];
    }
    return data;
}

export default async function BatchesPage() {
    const batches = await getBatches();

    return (
        <div className='flex-grow min-h-screen' style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <main className="container mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Batches</h1>
                        <p className="mt-4 text-lg text-gray-800">Explore the different batches of the EEE branch.</p>
                    </div>

                    {batches.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {batches.map(batch => (
                                // We now pass the href directly to the Card component
                                <Card 
                                    key={batch.year}
                                    href={`/batches/${batch.year}`}
                                    className="text-center bg-green-100"
                                >
                                    <h2 className="text-3xl font-bold text-gray-900">{batch.year}</h2>
                                    <p className="mt-2 text-gray-700">{batch.description}</p>
                                </Card>
                            ))}
                        </div>
                    ) : (
                         <p className="text-center text-gray-600">No batches found. Please add some to your Supabase table.</p>
                    )}
                </main>
            </div>
        </div>
    );
}

