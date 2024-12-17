import connect from "@/lib/db";
import User from "@/lib/models/user";
import { ObjectId } from "mongodb";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const users = await User.find();
    return new NextResponse(
      JSON.stringify(users),
      { status: 200 }
    );

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

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { userId, newUserName } = body

    await connect();

    if (!userId || !newUserName) {
      return new NextResponse (
        JSON.stringify (
          { message: "Id or new user name not found" }
          ),
          { status: 400 }
        );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify(
          { message: "Invalid user Id" }
        ),
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate (
      {  _id: ObjectId.createFromHexString(userId) },
      { username: newUserName },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify(
          { message: "User not found" }
        ),
        { status: 404 }
      );
    }

    return new NextResponse (
      JSON.stringify({ message: "User updated", user: updatedUser }),
      { status: 200 }
    );

  } catch (error: any) {
    return new NextResponse("Error in updating user" + error.message, {
      status: 500
    });
  }
}
