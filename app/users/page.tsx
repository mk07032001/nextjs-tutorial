import UserList from "./UserList";

const Page = async () => {
    const response = await fetch('http://localhost:3000/api',{
        //cache: 'no-store'
        next: {revalidate: 5 },
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'john',
            email: 'john@example.com',
        }),
    });

    const data = await response.json();

    console.log(data);

    return (
        <div className="m-4">
            <h1 className="text-lg font-blod">ユーザ一覧</h1>
            <UserList />
        </div>
    );
};

export default Page;