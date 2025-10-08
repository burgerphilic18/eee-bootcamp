'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function EditProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [bio, setBio] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (status === 'authenticated') {
            const fetchProfile = async () => {
                const { data } = await supabase
                    .from('students')
                    .select('*')
                    .eq('email', session.user.email)
                    .single();

                if (data) {
                    setBio(data.bio || '');
                    setLinkedin(data.linkedin_url || '');
                    setInstagram(data.instagram_url || '');
                    setImageUrl(data.imageUrl || '');
                }
                setLoading(false);
            };
            fetchProfile();
        }
    }, [session, status]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!session) return;
        setUpdating(true);

        const { error } = await supabase
            .from('students')
            .update({
                bio,
                linkedin_url: linkedin,
                instagram_url: instagram,
            })
            .eq('email', session.user.email);

        if (error) {
            console.error('Error updating profile:', error);
        } else {
            router.push('/batches');
        }
        setUpdating(false);
    };

    if (loading) {
        return (
            <div className="flex-grow flex items-center justify-center min-h-screen">
                <p className="text-2xl">Loading Profile...</p>
            </div>
        );
    }

    return (
        <div className="flex-grow flex items-center justify-center p-4 min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <Card className="bg-green-100 max-w-lg w-full">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Edit Your Profile</h1>
                    <form onSubmit={handleUpdate} className="space-y-6">
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
                        <Button type="submit" className="w-full bg-pink-400 text-lg" disabled={updating}>
                            {updating ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}