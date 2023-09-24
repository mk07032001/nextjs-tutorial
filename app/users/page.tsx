import UserList from './UserList';

const Page = async () => {
    return (
    <div className="m-4">
        <h1 className="text-lg font-bold">ユーザ一覧</h1>
        <UserList />
    </div>
    );
};

export default Page;