import express from "express";
import Admin from "../components/admin/Admin.js";
import Dashboard from "../components/admin/Dashboard.js";

const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.session.adminId) {
        return next();
    } else {
        return res.redirect('/admin');
    }
}

router.get('/dashboard', isAuthenticated, Dashboard.dashboard); 
router.get('/admin', (req, res) => {
    res.render('login'); 
});

router.post('/admin', Admin.login);
router.post('/logout', Admin.logout);

export default router;
