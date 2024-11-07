import "./navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSide">
                <img src="img/logo.jpg" alt="" />
                <h4>WAXED</h4>
        </div>

        <div className="midSide">
            <ul>
                <Link to={"/"} href="">Home</Link>
            </ul>
        </div>

        <div className="rightSide">
            <a href="">SHOP</a>
        </div>
    </div>
  )
}

export default Navbar