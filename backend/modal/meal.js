import mongoose, { Types } from "mongoose";

const MealSchema= new mongoose.Schema({
    meal_name:{type : String,required:true,trim:true},
    status: { type: Boolean, default: true },
    createdat: { type: Date, default: () => {
        const now = new Date();
        const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
        return new Date(now.getTime() + istOffset);
    }}
})
