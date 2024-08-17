import AdminInfo from "../../modal/admin.js";

class Admin {
    static login = async (req, res) => {
        const { email, password } = req.body;
        console.log(email);
        console.log(AdminInfo);
    
        try {
            const admin = await AdminInfo.findOne({ email: email });
    
            if (admin) {
                console.log('Admin document:', admin); 
                console.log(`Password: ${admin.password}`);
                
                if (password === admin.password.toString()) {
                    req.session.adminId = admin._id.toString();
                    console.log("Successfully logged in");
                } else {
                    console.log("Invalid password");
                }
            } else {
                console.log("Admin not found");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }
    

    static logout = (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Failed to logout');
            }
            res.redirect('http://localhost:5174/admin');
        });
    }
}

export default Admin;
