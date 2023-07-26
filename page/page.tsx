import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <Link href="/" className="underlink">
                Home
            </Link>
            <h1 className="tect-2xl">About</h1>
        </div>
    );
};


export default Page;