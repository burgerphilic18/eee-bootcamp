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
            </div>
        </footer>
    );
}

