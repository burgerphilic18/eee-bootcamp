import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function AccessDeniedPage() {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-[70vh] py-10">
            <div className="text-8xl mb-8">🚫</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase">Access Denied</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
                Sorry, this area is for EEE branch members only. Please use your official college email ID.
            </p>
            <Link href="/">
                <Button>
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}

