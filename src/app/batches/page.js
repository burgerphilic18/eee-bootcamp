import Link from 'next/link';
import { batches } from '@/lib/data';
import Card from '@/components/ui/Card';

export default function BatchesPage() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Batches</h1>
          <p className="mt-4 text-lg text-gray-800">Explore the different batches of the EEE branch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {batches.map(batch => (
            <Link href={`/batches/${batch.year}`} key={batch.year}>
                <Card className="text-center bg-green-100">
                    <h2 className="text-3xl font-bold text-gray-900">{batch.year}</h2>
                    <p className="mt-2 text-gray-700">{batch.students.length} Students</p>
                </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

