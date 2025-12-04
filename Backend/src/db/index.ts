import mongoose, { Schema, Document } from "mongoose";

// user ayenge yha p pehle aapke okkh!..
// user lo and then uske types likho first!..

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
}

const UserSchema: Schema<User> = new Schema({
  userName: { type: String, requirted: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// hamm nextjs lete hai to wha p liek mongoose s check karte hai like ki ye alreadu mongo m exist to nahi karta na?
// like () || () aiska kuch lete the but in normal node js mai hamm aisa nahi kkarnge yah pp sirf normal hi raehga okkh!..

export const UserModel = mongoose.model<User>("UserSchema", UserSchema);
