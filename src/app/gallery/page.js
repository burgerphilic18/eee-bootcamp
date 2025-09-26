'use client';
import { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '@/lib/data';

export default function GalleryPage() {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        setShuffledImages([...GALLERY_IMAGES].sort(() => 0.5 - Math.random()));
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Branch Gallery</h1>
            <p className="text-center text-base sm:text-lg mb-10">A random sneak peek from all batches. Moments captured, memories created.</p>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {shuffledImages.map((src, index) => (
                    <div key={index} className="break-inside-avoid">
                        <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-cover rounded-lg border-4 border-black" />
                    </div>
                ))}
            </div>
        </div>
    );
};

