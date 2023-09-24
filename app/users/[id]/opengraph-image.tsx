import { ImageResponse } from 'next/server';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default　async function Image({ params }: { params: { id: string }}) {
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    ).then((res) => res.json());

    return new ImageResponse(
        (
            <div
            style={{
                fontSize: 48,
                background: 'aqua',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                {user.name}
            </div>
        ),
        {
            ...size,
        }
    );
}