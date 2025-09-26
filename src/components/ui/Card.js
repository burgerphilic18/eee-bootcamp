export default function Card({ children, className, ...props }) {
    return (
        <div
            className={`
                p-6 rounded-lg 
                border-4 border-gray-900
                shadow-[8px_8px_0px_#000]
                hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000]
                transition-all duration-200
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}

