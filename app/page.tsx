import Link from 'next/link';
import Counter from './Counter';
import UserList from './users/UserList';

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline"  prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className='font-blod text-lg mt-4'>ユーザ一覧</h2>
        <UserList />
      </Counter>
    </div>
  );
}