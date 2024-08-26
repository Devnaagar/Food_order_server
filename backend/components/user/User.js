import UserModel from '../../modal/users.js';

class User {
    static adduser = async (req, res) => {
        try {
            const { name, email, phone, password } = req.body;
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const newUser = new UserModel({
                name,
                email,
                phone,
                password
            });
            await newUser.save();
            return res.status(201).json({ message: 'User added successfully', userId: newUser._id });
        } catch (error) {
            console.error('Error adding user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default User;
