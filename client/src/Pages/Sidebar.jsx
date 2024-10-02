import { Link } from 'react-router-dom'; // Import Link
import { useState } from 'react'; // Import useState for managing active state
import styles from './Sidebar.module.css'; // Import CSS module

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("/customer-management"); // Initialize active item state

  const navItems = [
    { href: "/customer-management", icon: "fas fa-th-large", label: "Customer Management" },
    { href: "/inventory", icon: "fas fa-check-circle", label: "Inventory" },
    { href: "/about", icon: "fas fa-bell", label: "About Us" },
    { href: "/contact", icon: "fas fa-cog", label: "Contact Us" },
    { href: "/invoice", icon: "fas fa-file-invoice", label: "Invoice" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img src="vite.svg" alt="Logo" className={styles.logo} />
        <h2 className={styles.brandName}>ManageHub</h2>
      </div>
      <nav className={styles.navLinks}>
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.href} 
            className={`${styles.navItem} ${activeItem === item.href ? styles.active : ''}`} // Corrected backtick usage
            onClick={() => setActiveItem(item.href)} // Set active item on click
          >
            <i className={item.icon}></i> {item.label}
          </Link>
        ))}
      </nav>
      <div className={styles.userSection}>
        <div className={styles.profile}>
          <i className="fas fa-user-circle"></i> {/* Replace with your profile icon */}
          <div className={styles.profileInfo}>
            <span className={styles.userName}>Emily</span>
            <span className={styles.userEmail}>emily@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
