import "./Sidebar.css";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import { ReactComponent as Training } from "../../assets/icons/training.svg";

import Auto from "../../assets/icons/automation.svg";
import Portfolio from "../../assets/icons/trading.svg";
import Trading from "../../assets/icons/portfolio.svg";
import Notf from "../../assets/icons/alert.svg";

import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";

const Sidebar = () => {
  return (
    <nav>
      <div className="nav-layout">
        <div>
          <div className="logo">
            <img loading="lazy" src={Logo} className="img-fluid" alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#">
                <Alert />
                <span className="nav-li">Alerts</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Training />
                <span className="nav-li">Training</span>
              </a>
            </li>

            <li className="position-relative">
              <a className="soon" href="#">
                <img loading="lazy" src={Auto} alt="Automation" />
                <span className="nav-li">Automation</span>
              </a>
            </li>

            <li className="position-relative">
              <a className="soon" href="#">
                <img loading="lazy" src={Portfolio} alt="Portfolio" />
                <span className="nav-li">Portfolio</span>
              </a>
            </li>

            <li className="position-relative">
              <a className="soon" href="#">
                <img loading="lazy" src={Trading} alt="Trading" />
                <span className="nav-li">Trading</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="profile">
          <button type="button" className="position-relative notif">
            <img
              loading="lazy"
              src={Notf}
              className="img-fluid"
              alt="notifications"
            />
            <span className="position-absolute top-0 translate-middle badge rounded-circle  bg-success">
              6
            </span>
          </button>
          <div className="d-flex justify-content-center gap-2 profile-card align-items-center">
            <img loading="lazy" className="avatar" src={Avatar} alt="avatar" />
            <div className="profile-info">
              <h3 className="name text-white">Moni Roy</h3>
              <p className="title">Beginner</p>
            </div>
          </div>
          <footer className="text-center">Street Suite. 2.0</footer>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
