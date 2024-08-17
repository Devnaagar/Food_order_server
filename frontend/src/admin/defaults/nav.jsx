import "../admin.css";

function Header2(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light mb-3 d-flex justify-content-end">
                <form method="post" action="http://localhost:3115/logout">
                    <button className="btn btn-outline-primary me-3" >Logout</button>
                </form>
            </nav>
        </>
    )
}
export default Header2;