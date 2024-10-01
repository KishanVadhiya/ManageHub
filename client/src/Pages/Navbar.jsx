// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <button className="add-btn">+ Add new</button>
        <i className="fas fa-question-circle icon" title="Help"></i>
        <i className="fas fa-bell icon" title="Notifications"></i>
        <img
          className="user-avatar"
          src="user-avatar-url-here"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
