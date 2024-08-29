import UserModel from '../../modal/users.js';

class User {
    static adduser = async (req, res) => {
        try {
            const { name, email, phone, password } = req.body;
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const newUser = new UserModel({name,email,phone,password});
            await newUser.save();
            return res.status(201).json({ message: 'User added successfully', userId: newUser._id });
        } catch (error) {
            console.error('Error adding user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static getusers=async(req,res)=>{
        try {
            const users = await UserModel.find({});
            return res.status(200).json(users);
        } catch (error) {
            console.log(err);
        }
    }
    static editusers = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }    
}

export default User;
