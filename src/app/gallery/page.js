'use client';
import { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '@/lib/data';

export default function GalleryPage() {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        setShuffledImages(GALLERY_IMAGES.sort(() => 0.5 - Math.random()));
    }, []);

    return (
        <div className='min-h-screen'
        style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="fixed inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10">
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Branch Gallery</h1>
                    <p className="mt-4 text-lg text-gray-800">A sneak peek from all batches.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {shuffledImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg border-4 border-gray-900 shadow-lg">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
        </div>
    );
}

