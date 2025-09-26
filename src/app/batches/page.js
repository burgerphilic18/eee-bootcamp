import Link from 'next/link';
import { batches } from '@/lib/data';
import Card from '@/components/ui/Card';

export default function BatchesPage() {
    return (
        <div className="bg-yellow-100 min-h-screen">
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                        Our Batches
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">
                        Explore the cohorts that form our EEE community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {batches.map((batch) => (
                        <Link href={`/batches/${batch.year}`} key={batch.year}>
                            {/* The Card component now handles its own animation */}
                            <Card className="flex flex-col items-center justify-center text-center p-8 h-full cursor-pointer bg-green-100">
                                <h2 className="text-3xl font-bold text-pink-500">{batch.year}</h2>
                                <p className="mt-2 text-gray-700">{batch.students.length} Students</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

