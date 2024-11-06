import Navbar from "../../Components/Navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <Navbar/>

        <div className="menu-wrapper">
            <div className="leftSide">
                <div className="rating">
                    <div className="details">
                        <div className="users">
                            <h4>Users</h4>
                            <h3>1234</h3>
                        </div>

                        <div className="stars">
                            <h4>Stars</h4>
                            <h3>4.8/5</h3>
                        </div>
                    </div>
                    <div className="table">
                        <ul>
                            <li>comment</li>
                            <li>comment</li>
                            <li>comment</li>
                            <li>comment</li>
                        </ul>
                    </div>
                </div>

                <div className="code">
                    <h3>Project Code</h3>
                </div>
            </div>

            <div className="rightSide">

            </div>
        </div>
    </div>
  )
}

export default Home