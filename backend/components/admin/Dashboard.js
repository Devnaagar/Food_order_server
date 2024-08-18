class Dashboard{
    static dashboard = async( req,res)=>{
        if (req.session.adminId) {
            console.log("successfully enter");
            res.redirect("http://localhost:5173/dashboard");
        } else {
            res.redirect('/admin');
        }
    }
}

export default Dashboard;