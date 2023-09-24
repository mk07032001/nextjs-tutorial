import {type User }  from '../UserList';

const Page = async ({ params }: { params: { id: string } }) => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/${params.id}'
    );
    const user: User = await response.json();

    return (
        <div className='m-4'>
            <h1 className='text-lg font-bold'>ユーザ詳細</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Page;