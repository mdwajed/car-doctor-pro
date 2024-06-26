import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  const newUsers = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUsers.email });
    if (exist) {
      return Response.json({ message: "user exist" }, { status: 304 });
    }
    const hashedPassword = bcrypt.hashSync(newUsers.password, 14);
    const resp = await userCollection.insertOne({
      ...newUsers,
      password: hashedPassword,
    });
    return Response.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "something went wrong", error },
      { status: 500 }
    );
  }
};
