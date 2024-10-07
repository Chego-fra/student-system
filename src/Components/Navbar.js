import { Link } from "react-router-dom/cjs/react-router-dom"

const Navbar = () =>{
    return(
        <div className="Navbar">
            <h1>Student System</h1>
            <div className="Links">
                <Link to="/" className="one">
                StudentList
                </Link>
                <Link to="/create-student" className="one">
                Create
                </Link>
            </div>
        </div>
    )
}
export default Navbar;