import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSide">
                <img src="img/logo.jpg" alt="" />
                <h4>WAXED</h4>
        </div>

        <div className="midSide">
            <ul>
                <a href="">APPS</a>
                <a href="">FAQ</a>
            </ul>
        </div>

        <div className="rightSide">
            <a href="">SHOP</a>
        </div>
    </div>
  )
}

export default Navbar