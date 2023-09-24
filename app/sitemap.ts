import { MetadataRoute } from 'next';

type User = {
    id: string,
};

export default　async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    const usersUrl = users.map((user) => {
        return {
            url: `http://localhost:3000/users/${user.id}`,
            lastModified: new Date(),
        };
    });

    return [
        {
            url: 'http://localhost:3000',
            lastModified: new Date(),
        },
        {
            url: 'http://localhost:3000/users',
            lastModified: new  Date(),
        },
        ...usersUrl,
    ];
}