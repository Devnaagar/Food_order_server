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
    
    static updateUser = async (req, res) => {
        try {
            const userId = req.params.id;
            const updateData = req.body;
            const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
    
            return res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } catch (error) {
            console.error("Error updating user:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    } 

    static deleteUser=async(req,res)=>{
        try {
            const userid = req.params.id;
            const result = await UserModel.findByIdAndDelete(userid);
    
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default User;
