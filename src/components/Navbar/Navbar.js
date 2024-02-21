import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul>
                <li className="li"> <Link to="/" className="link">Home</Link></li>
            </ul>
        </nav>       
    );
}
export default Navbar;