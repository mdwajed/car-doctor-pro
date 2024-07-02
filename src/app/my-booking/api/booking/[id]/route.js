import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const res = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({ message: "Booking Found", data: res });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    return NextResponse.json({
      message: "Booking Delete Successfull",
      response: res,
    });
  } catch (error) {
    return NextResponse.json({ message: "Booking is not Delete" });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updateDoc = await request.json();
  try {
    const res = await bookingsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updateDoc,
        },
      },
      {
        upsert: true,
      }
    );

    return NextResponse.json({
      message: "Booking Delete Successfull",
      response: res,
    });
  } catch (error) {
    return NextResponse.json({ message: "Booking is not Delete" });
  }
};
