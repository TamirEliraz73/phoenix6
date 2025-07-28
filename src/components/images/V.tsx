export default function V({ color = 'text-green-600', className = '' }: { color?: string, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${color} ${className}`}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
            />
        </svg>
    )
}