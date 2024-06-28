import React from "react";
import "./Navbar.css";
import menu_icon from "../../Vedios&Images/menu.png";
import logo from "../../Vedios&Images/logo.png";
import search from "../../Vedios&Images/search.png";
import upload from "../../Vedios&Images/upload.png";
import more from "../../Vedios&Images/more.png";
import notification from "../../Vedios&Images/notification.png";
import iqra from "../../Vedios&Images/iqra.png";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu_icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={iqra} className="user_icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
