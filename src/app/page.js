import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BoltIcon } from '@/components/shared/Icons';

export default function HomePage() {
  return (
    <div className="bg-yellow-100 min-h-screen"
    style={{ backgroundImage: "url('/bg.png')" }}>
    <div className="fixed inset-0 backdrop-blur-sm"></div>
    <div className="relative z-10">
      <main className="container mx-auto px-4 py-16 sm:py-24 text-center">
        
        <div className="flex justify-center mb-8">
            <Card className="bg-pink-400 p-6 inline-block">
                <BoltIcon className="h-16 w-16 text-yellow-300" />
            </Card>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight">
          EEE BOOTCAMP
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-800">
          Welcome to the digital hub for the Electrical and Electronics Engineering branch of IIIT Bhubaneswar.
        </p>

        <div className="mt-12">
            <Link href="/batches">
                <Button className="bg-green-300 text-xl">Explore Batches</Button>
            </Link>
        </div>
      </main>
    </div>
    </div>
  );
}

