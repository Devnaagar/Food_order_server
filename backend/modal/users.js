import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, minlength: 10, maxlength: 15 },
    password: { type: String, required: true },
    status: { type: Boolean, default: true },
    createdat: { type: Date, default: () => {
        const now = new Date();
        const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
        return new Date(now.getTime() + istOffset);
    }}
}, { collection: 'User' });

UserSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        next(error);
    }
});

let UserModel = mongoose.model('User', UserSchema);

export default UserModel;
