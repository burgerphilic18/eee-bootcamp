'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NewUserHandler({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === 'authenticated' && session.isNewUser && pathname !== '/profile/create') {
            router.push('/profile/create');
        }
    }, [session, status, router, pathname]);

    return children;
}