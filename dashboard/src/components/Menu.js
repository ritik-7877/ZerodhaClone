import React, { useState } from "react";

import { Link } from "react-router-dom"


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const hadnleMenuClick = (index) => {
    setSelectedMenu(index)
  }

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/" 
              onClick={() => hadnleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/Order" 
              onClick={() => hadnleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Order</p>
            </Link>
          </li>
          
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/Holdings" 
              onClick={() => hadnleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/Positions" 
              onClick={() => hadnleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/Funds" 
              onClick={() => hadnleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="/Apps" 
              onClick={() => hadnleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
          <li>
            <Link 
              style={{ textDecoration: "none" }} 
              to="http://localhost:3001/" 
              onClick={() => hadnleMenuClick(6)}
            >
              <button className={selectedMenu === 6 ? activeMenuClass : menuClass}>Logout</button>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;