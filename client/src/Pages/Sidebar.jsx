// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { href: "/home", icon: "fas fa-home", label: "Accounts", active: true },
    { href: "/customer-management", icon: "fas fa-th-large", label: "Customer Management" },
    { href: "/inventory", icon: "fas fa-check-circle", label: "Inventory" },
    { href: "/about", icon: "fas fa-bell", label: "About Us" },
    { href: "/contact", icon: "fas fa-cog", label: "Contact Us" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="vite.svg" alt="Logo" />
      </div>
      <div className="user-section">
        <span className="workspace">Emily&apos;s workspace</span>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link key={item.label} to={item.href} className={`nav-item ${item.active ? 'active' : ''}`}>
            <i className={item.icon}></i> {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
