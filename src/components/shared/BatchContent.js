'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { LinkedinIcon, InstagramIcon, EmailIcon } from '@/components/shared/Icons';

export default function BatchContent({ batch }) {
    const [activeTab, setActiveTab] = useState('students');

    const tabs = [
        { id: 'students', label: 'Students' },
        { id: 'highlights', label: 'Highlights' },
        { id: 'gallery', label: 'Gallery' },
    ];

    const EmptyState = ({ message }) => (
        <Card className="text-center bg-green-100/50">
            <p className="text-xl text-gray-600 py-12">{message}</p>
        </Card>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'students':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {batch.students.map(student => (
                            <Card key={student.id} className="text-center bg-green-100">
                                <img
                                    src={student.imageUrl}
                                    alt={`Profile of ${student.name}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-900 shadow-lg"
                                />
                                <h3 className="text-2xl font-bold text-gray-900">{student.name}</h3>
                                <p className="mt-2 text-gray-700">{student.bio}</p>
                                <div className="mt-6 flex justify-center space-x-6">
                                    <a href={`mailto:${student.email}`} className="text-gray-600 hover:text-pink-500 transition-colors">
                                        <EmailIcon className="h-8 w-8" />
                                    </a>
                                    <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                                        <LinkedinIcon className="h-8 w-8" />
                                    </a>
                                    <a href={student.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                                        <InstagramIcon className="h-8 w-8" />
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                );
            case 'highlights':
                if (!batch.highlights || batch.highlights.length === 0) {
                    return <EmptyState message="No highlights have been added for this batch yet." />;
                }
                return (
                    <div className="space-y-12">
                        {batch.highlights.map((highlight, index) => (
                            <Card key={index} className="bg-green-100 !p-0 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3">
                                    <img src={highlight.imageUrl} alt={highlight.title} className="w-full h-full object-cover"/>
                                </div>
                                <div className="p-6 flex flex-col md:w-2/3">
                                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{highlight.title}</h3>
                                        <p className="text-lg font-semibold text-pink-600">{highlight.studentName}</p>
                                    </div>
                                    <p className="mt-3 text-gray-700 flex-grow">{highlight.description}</p>
                                    <div className="mt-4">
                                        <span className="inline-block bg-pink-200 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full border-2 border-gray-900">
                                            {highlight.type}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                );
            case 'gallery':
                if (!batch.gallery || batch.gallery.length === 0) {
                    return <EmptyState message="No photos have been added to the gallery yet." />;
                }
                return (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {batch.gallery.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg border-4 border-gray-900 shadow-lg transform transition-transform hover:scale-105">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <div className="border-b-4 border-gray-900">
                <nav className="flex flex-col sm:flex-row sm:space-x-2" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                ${activeTab === tab.id ? 'bg-pink-300 border-gray-900 text-gray-900' : 'bg-green-200 border-transparent text-gray-600 hover:bg-green-300 hover:border-gray-900'}
                                flex-1 whitespace-nowrap py-4 px-1 border-b-4 font-bold text-2xl transition-colors duration-200
                                border-t-4 border-l-4 border-r-4 border-gray-900 rounded-t-lg
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="pt-10">
                {renderContent()}
            </div>
        </div>
    );
}

