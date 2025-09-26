'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, BoltIcon } from '@/components/shared/Icons';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/batches', label: 'Batches' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-green-200 border-b-4 border-gray-900 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                        <div className="bg-pink-400 p-2 rounded-lg border-2 border-gray-900">
                            <BoltIcon className="h-8 w-8 text-yellow-300" />
                        </div>
                        <span className="hidden sm:block text-xl font-bold text-gray-900">EEE Bootcamp</span>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={`text-lg font-bold transition-colors ${pathname === link.href ? 'text-pink-600' : 'text-gray-800 hover:text-pink-500'}`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Login Button - Hidden on mobile */}
                    <div className="hidden md:block">
                         <Link href="/login">
                            <Button className="bg-pink-400 shadow-[4px_4px_0px_#000]">Login</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Only visible on mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-900" aria-label="Toggle menu">
                            {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Slides in from the left */}
            <div
                className={`
                    md:hidden absolute top-full left-0 w-full bg-yellow-100 border-b-4 border-gray-900
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="px-4 pt-4 pb-8 space-y-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block text-2xl font-bold text-gray-800 text-center py-2 rounded-md hover:bg-green-200" onClick={handleLinkClick}>
                            {link.label}
                        </Link>
                    ))}
                     <div className="pt-4 px-4">
                        <Link href="/login" onClick={handleLinkClick}>
                             <Button className="w-full bg-pink-400 text-xl shadow-[4px_4px_0px_#000]">Login</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

