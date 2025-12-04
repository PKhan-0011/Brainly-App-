import mongoose from "mongoose";

export type ConnctedObject = {
  isConnected?: number;
};

const Connection: ConnctedObject = {};

export async function dbConnect(): Promise<void> {
  if (Connection.isConnected) {
    throw new Error("connection already there!..");
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL!);

    Connection.isConnected = db.connections[0]?.readyState!; // ! iska matlb ye hai ki te ayega hi ayega okkh!..

    console.log(Connection.isConnected);
    console.log("Mongoose connect ho chuke hai okkh!..");
  } catch (e) {
    const err = e as Error;
    throw new Error("Error there!..", err);
  }
}
