import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const req = await request.json();
    await prisma.post.create({ data: req });

    return NextResponse.json(req);
}