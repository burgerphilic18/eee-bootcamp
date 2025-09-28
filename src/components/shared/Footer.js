import { GithubIcon } from "./Icons";

export default function Footer() {
    return (
        <footer className="bg-green-300 border-t-4 border-dashed border-gray-900 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-800">
                <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="font-bold">EEE Bootcamp</span>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} EEE Batch. All Rights Reserved.
                </p>
                <div className="flex space-x-4 mt-2 justify-center-safe">
                <a
                href="https://github.com/burgerphilic18/eee-bootcamp" // Replace with your actual repo URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-500 transition-colors"
                aria-label="GitHub Repository"
                >
                <GithubIcon className="h-8 w-8" />
                </a>
            </div>
            </div>
        </footer>
    );
}

