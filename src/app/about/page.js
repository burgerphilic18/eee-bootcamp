import Card from '@/components/ui/Card';
import { DEVS } from '@/lib/data';
import { LinkedinIcon, GithubIcon } from '@/components/shared/Icons';

export default function AboutPage() {
    return (
        <div className='min-h-screen'
        style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="fixed inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10">
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h1>
                    <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
                        This website is a collaborative project created by students, for students. It's a living archive of our journey through the Electrical and Electronics Engineering branch at IIIT Bhubaneswar.
                    </p>
                </div>

                <section>
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">The Developers</h2>
                    <div
                        className={
                            DEVS.length === 1
                                ? "flex justify-center"
                                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        }
                    >
                        {DEVS.map((dev) => (
                            <Card key={dev.id} className="text-center bg-green-100 max-w-sm">
                                <img
                                    src={dev.imageUrl}
                                    alt={`Profile of ${dev.name}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                                />
                                <h3 className="text-xl font-bold text-gray-900">{dev.name}</h3>
                                <h5 className="text-l text-gray-900">{dev.description}</h5>
                                <div className="mt-4 flex gap-2 justify-center">
                                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                                        <LinkedinIcon className="h-8 w-8" />
                                    </a>
                                    <a
                                                    href="https://github.com/burgerphilic18/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-800 hover:text-pink-500 transition-colors"
                                                    aria-label="GitHub Repository"
                                                    >
                                                    <GithubIcon className="h-8 w-8" />
                                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </div>
        </div>
    );
}

