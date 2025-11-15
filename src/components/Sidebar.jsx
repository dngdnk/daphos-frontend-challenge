import React from "react";
import Profile from "../assets/sunday.png";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <div className="logo">
          <StarRateOutlinedIcon className="logoIcon" />
          <h2 className="title">DaphOS</h2>
        </div>
      </div>

      <div className="burgerContainer">
        {/* <div className="burgerTrigger"></div>
        <div className="burgerMenu"></div> */}
        <MenuIcon className="burgerIcon" />
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
          <li>
            <DashboardOutlinedIcon className="icon" />
            <a href="/">Dashboard</a>
          </li>
          <li>
            <PeopleOutlineOutlinedIcon className="icon" />
            <a href="/employees">Employees</a>
          </li>
          <li>
            <CalendarMonthOutlinedIcon className="icon" />
            <a href="/shifts">Shifts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
