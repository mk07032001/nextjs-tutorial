import UserList from "./UserList";
type User = {
    id:string,
    name:string,
    email:string,
};

const Page = async () => {
    return (
        <div className="m-4">
            <h1 className="text-lg font-blod">ユーザ一覧</h1>
            <UserList />
        </div>
    );
};

export default Page;