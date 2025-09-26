import Card from '@/components/ui/Card';
import { DEVS } from '@/lib/data';
import { LinkedinIcon } from '@/components/shared/Icons';

export default function AboutPage() {
    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
                        About the EEE Bootcamp Hub
                    </h1>
                    <p className="text-slate-600 text-lg">
                        This project is a digital home for the EEE batch of IIIT Bhubaneswar, created to foster community, showcase our achievements, and preserve our memories. It's built by students, for students.
                    </p>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12">
                        Meet the Developers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {DEVS.map((dev) => (
                            <Card key={dev.id} className="bg-white text-center p-8 transition hover:shadow-xl hover:-translate-y-1">
                                <img
                                    src={dev.imageUrl}
                                    alt={dev.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-200"
                                />
                                <h3 className="text-xl font-bold text-slate-800">{dev.name}</h3>
                                <p className="text-slate-500 mb-4">{dev.role}</p>
                                <a
                                    href={dev.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-600 transition"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <LinkedinIcon className="h-8 w-8 mx-auto" />
                                </a>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

