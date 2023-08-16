import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET() {
    const headersList = headers();
    const cookieStore = cookies();

    console.log('headersList', headersList);
    console.log('cookieStore', cookieStore);

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const date = await response.json();
    return NextResponse.json(date);
}