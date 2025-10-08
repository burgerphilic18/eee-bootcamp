'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Import the full hook
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function CreateProfilePage() {
    // Get the session, status, AND the update function from the hook
    const { data: session, status, update } = useSession(); 
    const router = useRouter();
    
    const [bio, setBio] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.image) {
            setImageUrl(session.user.image);
        }
    }, [session, status]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bio, linkedin, instagram }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }
            
            // --- THE FIX IS HERE ---
            // 1. Manually update the session token to set isNewUser to false
            await update();

            // 2. Now that the session is fresh, redirect
            router.push(`/batches/${result.batchYear}`);
            // --- END OF FIX ---

        } catch (err) {
            console.error('Error creating profile:', err.message);
            setError(err.message);
            setLoading(false);
        }
    };

    if (status === 'loading') {
        return (
            <div className="flex-grow flex items-center justify-center min-h-screen">
                <p className="text-2xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex-grow flex items-center justify-center p-4 min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <Card className="bg-green-100 max-w-lg w-full">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Create Your Profile</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center">
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-900"
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="bio" className="block text-lg font-bold text-gray-800">Bio</label>
                            <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full mt-1 p-2 border-2 border-gray-900 rounded-lg" required />
                        </div>
                        <div>
                            <label htmlFor="linkedin" className="block text-lg font-bold text-gray-800">LinkedIn URL</label>
                            <input type="url" id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full mt-1 p-2 border-2 border-gray-900 rounded-lg" />
                        </div>
                        <div>
                            <label htmlFor="instagram" className="block text-lg font-bold text-gray-800">Instagram URL</label>
                            <input type="url" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full mt-1 p-2 border-2 border-gray-900 rounded-lg" />
                        </div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <Button type="submit" className="w-full bg-pink-400 text-lg" disabled={loading}>
                            {loading ? 'Creating...' : 'Create Profile'}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}