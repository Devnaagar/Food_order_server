import express from "express";
const router = express.Router();

import Admin from "../components/admin/Admin.js";


// router.get('/', (req, res) => {

//     if (req.session.adminId) {
//         console.log("successfully enter");
//     } else {
//         res.redirect('/admin');
//     }
// });
router.get('/admin', Admin.login);


router.post('/admin', Admin.login);
// router.get('/dashboard', Dashboard.dashboard);
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/admin');
    });
});

export default router;