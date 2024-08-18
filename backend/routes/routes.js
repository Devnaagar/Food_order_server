import express from "express";
import Admin from "../components/admin/Admin.js";

const router = express.Router();

router.get('/admin', (req, res) => {
    res.redirect("http://localhost:5173/admin");
});

router.post('/login', Admin.login);
router.post('/logout', Admin.logout);

export default router;
