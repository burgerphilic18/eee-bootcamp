export default function Button({ children, className, ...props }) {
    return (
        <button
            className={`
                px-6 py-3 rounded-lg font-bold text-gray-900 bg-yellow-400
                border-2 border-gray-900 
                shadow-[4px_4px_0px_#F2BED1]
                hover:shadow-[6px_6px_0px_#F2BED1]
                active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

