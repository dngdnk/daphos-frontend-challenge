import { Link, useLocation } from "react-router-dom";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../assets/sunday.png";
import "../styles/sidebar.scss";

function Sidebar({ closeMenu, setCloseMenu }) {
  const location = useLocation();

  const handleMenuToggle = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={`sidebar ${closeMenu ? "active" : ""}`}>
      <div className="logoContainer">
        <div className="logo">
          <StarRateOutlinedIcon className="logoIcon" />
          <h2 className="title">DaphOS</h2>
        </div>
      </div>

      <div className="burgerContainer">
        <MenuIcon className="burgerIcon" onClick={handleMenuToggle} />
      </div>

      <div className="profileContainer">
        <img src={Profile} alt="Profile" className="profileImage" />
        <div className="profileContents">
          <p className="name">Hello, Sunday!</p>
          <p className="role">Administrator</p>
          <p className="email">sunday@example.com</p>
        </div>
      </div>

      <div className="contentsContainer">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <DashboardOutlinedIcon className="icon" />
            <Link to="/">Dashboard</Link>
          </li>
          <li className={location.pathname === "/employees" ? "active" : ""}>
            <PeopleOutlineOutlinedIcon className="icon" />
            <Link to="/employees">Employees</Link>
          </li>
          <li className={location.pathname === "/shifts" ? "active" : ""}>
            <CalendarMonthOutlinedIcon className="icon" />
            <Link to="/shifts">Shifts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
