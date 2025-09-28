'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase
                .from('gallery_images')
                .select('image_url, alt_text');

            if (error) {
                console.error('Error fetching gallery images:', error);
            } else if (data) {
                const formatted = data.map(img => ({ src: img.image_url, alt: img.alt_text }));
                setImages(formatted.sort(() => 0.5 - Math.random()));
            }
            setLoading(false);
        };
        fetchImages();
    }, []);

    return (
        <div className='flex-grow min-h-screen' style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <main className="container mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Branch Gallery</h1>
                        <p className="mt-4 text-lg text-gray-800">A sneak peek from all batches.</p>
                    </div>
                    
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-300/50 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-lg border-4 border-gray-900 shadow-lg">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

