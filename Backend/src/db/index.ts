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

export interface Content extends Document {
  title: string;
  link?: string;
  tags?: []; // yha bhi Tag[] aisa ayega okkh!>.
  userId?: string;
}

const ContentSchema: Schema<Content> = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag", required: true }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = mongoose.model<Content>(
  "ContentSchema",
  ContentSchema
);

// dekh bhai tughe like kuch chizo ka dhyan rakhna hai jaise
// create`isse dataBase m chize jayngi!..
// find() isse array return hoga okkH! findOne() isse object return hoga okkh!.
// findById() id s wo ek sigle object return hoga findMany(filter)

// create isse dataBase m chize push ho jayengi okkh!..

// find() isse multiple data return hoga in array okkh!..
// findOne() s hame ek hi object return hoga onlyy ek hi okkh!..
// findById()  isse bhi ek ho data return hoga okkh!//

// UpdateOne(filter, {update}):- updateOne({email:'parvejkaahn@123'}, {age:22}) isme 5 user ka email same hai but fir bhi first ka upadte hoga okkh!.
// UpdateMany():- upadteOne({email:'parvejkaahn@123'}, {age:22}) isme 5 agar same email k mil gaye to wo sare upadte honge okkh!..

// deleteOne(filter):- isse ek match wala hi delete hoga but sirf ek hi objcet okkh!.
//deleteMany(filter):- isse match karke sara object delete kar dega p=okkh!.
// delereOneAndupdate(fikter):-- pehle find karega and delete kar deg wo!
//delteteByIdAndUpdate(filter):= ye pehhle id s find karega then delete kard dega okkh!..
