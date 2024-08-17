import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email: { type: String, required: true, trim: true },
    phone:{type: BigInt,required: true,length:11},
    password: { type: BigInt, required: true }
},{collection:'admin'});

const AdminInfo=mongoose.model("admin",AdminSchema);

export default AdminInfo;