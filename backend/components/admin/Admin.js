import AdminInfo from "../../modal/admin.js";

class Admin {
    static login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await AdminInfo.findOne({ email: email });
            if (admin) {
                if (password === admin.password.toString()) {
                    req.session.adminId = admin._id.toString();
                    return res.status(200).json({ message: "Login successful", redirectUrl: "/dashboard" });
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
