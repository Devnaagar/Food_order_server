import express from "express";
import Admin from "../components/admin/Admin.js";
import Dashboard from "../components/admin/Dashboard.js";
import verifyToken from "../middleware/verifyToken.js";
import User from "../components/user/User.js";

const router = express.Router();

//authentication
router.get('/admin', (req, res) => {
    res.redirect("http://localhost:5173/admin");
});
router.post('/login', Admin.login);
router.get('/dashboard', verifyToken, Dashboard.dashboard);
router.post('/logout', Admin.logout);

//users
router.post('/addusers',User.adduser);
router.get('/getusers',User.getusers);
router.get('/editusers/:id',User.editusers);
router.post('/updateusers/:id',User.updateUser)
router.post('/deleteusers/:id',User.deleteUser)

export default router;
