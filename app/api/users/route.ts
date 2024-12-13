import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });

  } catch (error) {
    return new NextResponse("Error in fetching users" + (error instanceof Error ? error.message : ""), { status: 500 });
  }
}

export const POST = async (request: Request) => {
  try {

    const body = await request.json();

    await connect();

    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User created", user: newUser}),
      {status: 200}
    );


  } catch (error: any) {
    return new NextResponse("Error in createing user" + error.message, {
      status: 500
    })
  }
}