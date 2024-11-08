import Navbar from "../../Components/Navbar/Navbar";
import "./home.css";
import apps from "../../Components/hooks/apps.json";
import { Link } from "react-router-dom";

// Import des icons

import { User } from "lucide-react";
import { Star } from "lucide-react";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="menu-wrapper">
        <div className="leftSide">
          <div className="rating">
            <div className="details">
              <div className="users">
                <h4>
                  Users{" "}
                  <span className="red">
                    <User />
                  </span>
                </h4>
                <h3>1234</h3>
              </div>

              <div className="stars">
                <h4>
                  Stars <Star />
                </h4>
                <h3>4.8/5</h3>
              </div>

              <div className="status">
                <h4>Status</h4>
                <h3>ONLINE</h3>
              </div>
            </div>
            <div className="table">
              <ul>
                <li>Alex: "Great, the program works perfectly!"</li>
                <li>Jordan: "No bugs detected, running smoothly!"</li>
                <li>Sam: "Code executes without errors, nice work!"</li>
                <li>
                  Taylor: "Expected result achieved, your program runs
                  flawlessly!"
                </li>
              </ul>
            </div>
          </div>

          <div className="code">
            <div className="leftSide">
              <h3>Project code</h3>
              <img src="img/pie.png" alt="" />
            </div>
            <div className="rightSide">
              <ul>
                <li>
                  PYTHON ---- <span className="red">75%</span>
                </li>
                <li>
                  C# ---- <span className="blue">15%</span>
                </li>
                <li>
                  LIBS ---- <span className="yellow">10%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <h3>Project Review</h3>
          {apps.map((element) => {
            return (
              <form
                className="apps"
                key={element.name}
                href="https://github.com"
              >
                <img src={element.image} alt="" />
                <h3>{element.name}</h3>
                <h3>{element.version}</h3>
                <Link to={"/ttvbots"} className="link">
                  Check
                </Link>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
