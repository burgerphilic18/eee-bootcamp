'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { GoogleIcon } from '@/components/shared/Icons';
import { signIn } from 'next-auth/react';

export default function AccessDeniedPage() {
    return (
        <div className="bg-yellow-100 min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="fixed inset-0 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <div className="text-center flex flex-col items-center justify-center min-h-full py-10 px-4">
                    <div className="text-8xl mb-8">🚫</div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase text-gray-900">Access Denied</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-gray-800">
                        Sorry, this area is for EEE branch members only. Please use your official college email ID.
                    </p>
                    <Button
                        onClick={() => signIn('google', { callbackUrl: '/batches' })}
                        className="max-w-md w-full mb-4 bg-pink-400 text-lg sm:text-xl shadow-[4px_4px_0px_#000] flex items-center justify-center gap-3"
                    >
                        <GoogleIcon className="h-6 w-6" />
                        Sign in with Google
                    </Button>
                    <Link href="/">
                        <Button className="w-full max-w-md">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

