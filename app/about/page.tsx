import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        User
      </Link>
      <h1 className="text-2xl">About</h1>
    </div>
  );
};

export default Page;