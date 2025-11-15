import React from "react";
import Profile from "../assets/sunday.png";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "../styles/sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      SIDEBAR
      <div className="logoContainer">
        <div className="logo">
          <StarRateOutlinedIcon className="logoIcon" />
          <h2 className="title">DaphOS</h2>
        </div>
        <div className="burgerContainer">
          <div className="burgerTrigger"></div>
          <div className="burgerMenu"></div>
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
              <a href="/">Employees</a>
            </li>
            <li>
              <CalendarMonthOutlinedIcon className="icon" />
              <a href="/">Shifts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
