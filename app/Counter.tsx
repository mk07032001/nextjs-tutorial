'use client'
import { useState } from 'react';

const Counter = ({ children }: {children: React.ReactNode}) => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <>
        <div>Count: {count}</div>
        <button
            onClick={increment}
            className='px-2 py-1 rounded-lg bg-blue-600 text-white'
            >
                Increment
            </button>
            {children}
        </>
    );
};

export default Counter;