import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import Profile from "../assets/sunday.png";
import "../styles/sidebar.scss";

function Sidebar({ closeMenu, setCloseMenu }) {
  const location = useLocation();

  const handleMenuToggle = () => {
    setCloseMenu(!closeMenu);
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: <DashboardOutlinedIcon className="icon" />,
    },
    {
      label: "Employees",
      path: "/employees",
      icon: <PeopleOutlineOutlinedIcon className="icon" />,
    },
    {
      label: "Shifts",
      path: "/shifts",
      icon: <CalendarMonthOutlinedIcon className="icon" />,
    },
  ];

  return (
    <div className={`sidebar ${closeMenu ? "active" : ""}`}>
      {/* Logo */}
      <div className="logoContainer">
        <div className="logo">
          <StarRateOutlinedIcon className="logoIcon" />
          <h2 className="title">DaphOS</h2>
        </div>
      </div>

      {/* Burger */}
      <div className="burgerContainer">
        <MenuIcon className="burgerIcon" onClick={handleMenuToggle} />
      </div>

      {/* Profile */}
      <div className="profileContainer">
        <img src={Profile} alt="Profile" className="profileImage" />
        <div className="profileContents">
          <p className="name">Hello, Sunday!</p>
          <p className="role">Administrator</p>
          <p className="email">sunday@example.com</p>
        </div>
      </div>

      {/* Menu */}
      <div className="contentsContainer">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link to={item.path} className="menuLink">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
