import {type User }  from '../UserList';
import { Metadata } from 'next';

async function getUser(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,{
            next: {
                revalidate: 5,
            },
        }
    );
    return response.json();
}

export async function generateMetadata({
    params,
}: {
    params: {id: string},
}): Promise<Metadata>{
    const user = await getUser(params.id);
    return { title: user.name};
}

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    return users.map((user) => ({
        id: user.id.toString(),
    }));
    
}

const Page = async ({ params }: { params: { id: string } }) => {
    const user: User = await getUser(params.id);

    return (
        <div className='m-4'>
            <h1 className='text-lg font-bold'>ユーザ詳細</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Random: {Math.random()}</p>
        </div>
    );
};

export default Page;