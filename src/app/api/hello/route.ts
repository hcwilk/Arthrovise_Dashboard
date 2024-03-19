import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
    // Make call to backend
    try {
        const backendUrl = process.env.BACKEND_URL;
        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }
        const response = await axios.get(backendUrl);
        return NextResponse.json(response.data, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: "Hello World" }, { status: 200 });
    }
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
