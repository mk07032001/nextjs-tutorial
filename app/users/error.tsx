'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error,
    reset: () => void,
}) {
    return (
        <div className="m-e font-blod">
            <p>{error.message}</p>
            <button
                className="px-2 py-1 text-white bg-blue-500 rounded-lg"
                onClick={() => reset()}
            >
                try again
            </button>
        </div>
    );
}