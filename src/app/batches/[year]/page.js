import { batches } from '@/lib/data';
import Card from '@/components/ui/Card';
import { LinkedinIcon, InstagramIcon } from '@/components/shared/Icons';
import Link from 'next/link';

// This function tells Next.js which dynamic pages to build
export async function generateStaticParams() {
    // Ensuring the year is a string, which is good practice for URL params
    return batches.map((batch) => ({
        year: String(batch.year),
    }));
}

// This function generates dynamic metadata for the page
export async function generateMetadata({ params }) {
    const { year } = await params; // Your elegant fix for the async error
    const batch = batches.find(b => String(b.year) === year);

    if (!batch) {
        return { title: "Batch Not Found" };
    }

    return {
        title: `Batch of ${batch.year} | EEE Bootcamp`,
        description: `Meet the students, view achievements, and see the gallery for the ${batch.year} EEE batch.`,
    };
}


export default async function BatchPage({ params }) {
    const { year } = await params; // Your elegant fix for the async error
    const batch = batches.find(b => String(b.year) === year);

    if (!batch) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-bold">Batch Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Sorry, we couldn't find the batch you're looking for.
                </p>
                <Link href="/batches" className="mt-6 inline-block text-pink-500 hover:underline">
                    Back to all batches
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                {/* Batch Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Batch of <span className="text-pink-500">{batch.year}</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        {batch.description}
                    </p>
                </div>

                {/* Student Profiles Section */}
                <section id="students" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Meet the Students</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {batch.students.map((student) => (
                            <Card key={student.id} className="text-center transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={student.imageUrl}
                                    alt={`Profile of ${student.name}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                                />
                                <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                                <p className="mt-2 text-gray-600">{student.bio}</p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                                        <LinkedinIcon className="h-6 w-6" />
                                    </a>
                                    <a href={student.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                                        <InstagramIcon className="h-6 w-6" />
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Achievements Section */}
                <section id="achievements" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Achievements</h2>
                    <div className="space-y-6">
                        {batch.achievements.map((achievement, index) => (
                            <Card key={index} className="!p-0 overflow-hidden">
                                <div className="p-6">
                                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                                        <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                                        <p className="text-md font-semibold text-pink-500">{achievement.studentName}</p>
                                    </div>
                                    <p className="mt-2 text-gray-600">{achievement.description}</p>
                                </div>
                                <div className="bg-gray-50 px-6 py-2">
                                    <span
                                        className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                                    >
                                        {achievement.type}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {batch.gallery.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}