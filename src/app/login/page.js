import Card from '@/components/ui/Card';
import { GoogleIcon } from '@/components/shared/Icons';
import Button from '@/components/ui/Button';

export default function LoginPage() {
    return (
        <div className="flex-grow flex items-center justify-center p-4">
            <Card className="bg-green-100 max-w-md w-full text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Login</h1>
                <p className="text-gray-700 mb-8">Access the EEE student portal.</p>
                <Button className="w-full bg-pink-400 text-lg sm:text-xl shadow-[4px_4px_0px_#000] flex items-center justify-center gap-3">
                    <GoogleIcon className="h-6 w-6" />
                    Sign in with Google
                </Button>
                <p className="mt-6 text-sm text-gray-600">
                    Only authorized student accounts (@iiit-bh.ac.in) are allowed.
                </p>
            </Card>
        </div>
    );
}

