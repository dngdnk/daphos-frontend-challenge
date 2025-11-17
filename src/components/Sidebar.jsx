import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import MarkAsUnreadRoundedIcon from "@mui/icons-material/MarkAsUnreadRounded";
import Profile from "../assets/sunday.png";
import "../styles/Sidebar.scss";

function Sidebar({ closeMenu, setCloseMenu }) {
  const location = useLocation();

  const handleMenuToggle = () => {
    setCloseMenu(!closeMenu);
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: <WidgetsRoundedIcon className="icon" />,
    },
    {
      label: "Employees",
      path: "/employees",
      icon: <GroupsRoundedIcon className="icon" />,
    },
    {
      label: "Shifts",
      path: "/shifts",
      icon: <WorkHistoryRoundedIcon className="icon" />,
    },
    {
      label: "Mailbox",
      path: "/mailbox",
      icon: <MarkAsUnreadRoundedIcon className="icon" />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <PersonPinRoundedIcon className="icon" />,
    },
  ];

  return (
    <div className={`sidebar ${closeMenu ? "active" : ""}`}>
      {/* Logo */}
      <div className="logoContainer">
        <div className="logo">
          <HeartBrokenRoundedIcon className="logoIcon" />
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
          <p className="name">Sunday</p>
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
