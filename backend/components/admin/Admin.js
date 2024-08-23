import AdminInfo from "../../modal/admin.js";
import jwt from 'jsonwebtoken';
const JWT_SECRET = '12345'; 

class Admin {
    static login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await AdminInfo.findOne({ email: email });
            if (admin) {
                if (password === admin.password.toString()) {
                    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET, { expiresIn: '1h' });
                    return res.status(200).json({
                        message: "Login successful",
                        token: token, // Send the JWT token
                        redirectUrl: "/dashboard",
                        username: admin.name,
                        admin_id: admin._id
                    });
                } else {
                    return res.status(401).json({ message: "Invalid password" });
                }
            } else {
                return res.status(401).json({ message: "Invalid email" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    
    static logout = (req, res) => {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
            res.redirect('/admin');
        });
    }
}

export default Admin;
