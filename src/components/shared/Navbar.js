'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, BoltIcon } from '@/components/shared/Icons';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/batches', label: 'Batches' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-blue-400 border-b-4 border-dashed border-gray-900 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center font-bold text-2xl gap-2">
                <BoltIcon className="h-8 w-8 text-yellow-400 rounded-lg" />
                <span>EEE Bootcamp</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-xl font-bold hover:text-pink-500 transition-colors">
                    {link.label}
                </Link>
                ))}
                {status === 'authenticated' ? (
                    <Button onClick={() => signOut()}>Logout</Button>
                ) : (
                    <Button onClick={() => signIn('google')}>Login</Button>
                )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md inline-flex items-center justify-center text-gray-900 hover:bg-green-300" aria-label="Toggle menu">
                {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`
            md:hidden transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            fixed top-0 left-0 h-full w-full bg-green-200 z-40 pt-20
            `}
        >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={handleLinkClick} className="text-3xl font-bold hover:text-pink-500 transition-colors">
                {link.label}
                </Link>
            ))}
            {status === 'authenticated' ? (
                <Button onClick={() => { signOut(); handleLinkClick(); }} className="text-3xl !px-8 !py-4">Logout</Button>
            ) : (
                <Button onClick={() => { signIn('google'); handleLinkClick(); }} className="text-3xl !px-8 !py-4">Login</Button>
            )}
            </nav>
        </div>
        </header>
    );
}

