export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-12 py-8">
            <div className="container mx-auto text-center text-slate-600">
                <p className="font-semibold">
                    &copy; {new Date().getFullYear()} EEE Branch | IIIT Bhubaneswar
                </p>
                <p className="text-sm mt-2">
                    A student-led initiative to connect and showcase our journey.
                </p>
            </div>
        </footer>
    );
}

