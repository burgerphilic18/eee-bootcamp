import Card from '@/components/ui/Card';
import { GoogleIcon } from '@/components/shared/Icons';

export default function LoginPage() {
    return (
        <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
            <main className="container mx-auto px-4 py-12 text-center">
                <Card className="max-w-md mx-auto bg-green-100">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Login
                    </h1>
                    <p className="mt-4 text-gray-700">
                        Please sign in with your official college Google account to continue.
                    </p>
                    <div className="mt-8">
                        <button
                            className={`
                                w-full px-6 py-4 rounded-lg font-bold text-gray-900 bg-white
                                border-2 border-gray-900 flex items-center justify-center gap-3
                                shadow-[4px_4px_0px_#000]
                                hover:shadow-[6px_6px_0px_#000]
                                active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                                transition-all duration-150
                            `}
                        >
                            <GoogleIcon className="h-6 w-6" />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </Card>
            </main>
        </div>
    );
}

