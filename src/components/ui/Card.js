'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Card({ children, className = '', href }) {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsPressed(false);

    const cardContent = (
        <div
            className={`p-6 rounded-lg border-4 border-gray-900 shadow-[8px_8px_0px_#000] transition-all duration-150 ease-in-out cursor-pointer ${
                isPressed ? 'transform translate-x-1 translate-y-1 shadow-[4px_4px_0px_#000]' : ''
            } ${className}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {children}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg">
                {cardContent}
            </Link>
        );
    }
    return cardContent;
}

