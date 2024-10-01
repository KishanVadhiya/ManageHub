// import React from 'react';
import './about.css'; // Import your CSS styles here

const AboutUs = () => {
    return (
        <div>
            <div className="about-container">
                <div className="about-overlay"></div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>
                        Our accounting software is designed to provide innovative and effective solutions for your business needs. 
                        With an intuitive interface and powerful features, our goal is to help you manage your finances with ease.
                    </p>
                    <div className="team">
                        <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2ODc3NTg2OTM&ixlib=rb-1.2.1&q=80&w=1080" alt="Team Member" />
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHBlcnNvbnxlbnwwfHx8fDE2ODc3NTg2ODQ&ixlib=rb-1.2.1&q=80&w=1080" alt="Team Member" />
                        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBlcnNvbnxlbnwwfHx8fDE2ODc3NTg2NzA&ixlib=rb-1.2.1&q=80&w=1080" alt="Team Member" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="features">
                <div className="feature-item">
                    <img src="https://img.icons8.com/external-flatart-icons-lineal-flatarticons/64/000000/external-security-cyber-monday-flatart-icons-lineal-flatart-icons.png" alt="Security Icon" />
                    <h3>Secure & Reliable</h3>
                    <p>Top-notch security to protect your data 24/7.</p>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-automation-data-analytics-flatart-icons-flat-flatart-icons.png" alt="Automation Icon" />
                    <h3>Automated Features</h3>
                    <p>Automated reports and updates save time.</p>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-user-business-strategy-flatart-icons-flat-flatart-icons.png" alt="User Icon" />
                    <h3>User Friendly</h3>
                    <p>Designed with simplicity and ease-of-use in mind.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial">
                    <div className="testimonial-item">
                        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBlcnNvbnxlbnwwfHx8fDE2ODc3NTg2NzA&ixlib=rb-1.2.1&q=80&w=1080" alt="Client Photo" />
                        <p>This software has revolutionized our accounting process! Highly recommended.</p>
                        <h4>- Sarah James, CEO</h4>
                    </div>
                    <div className="testimonial-item">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHBlcnNvbnxlbnwwfHx8fDE2ODc3NTg2ODQ&ixlib=rb-1.2.1&q=80&w=1080" alt="Client Photo" />
                        <p>The automation features are a game changer for our business. So easy to use!</p>
                        <h4>- David Lee, CFO</h4>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay updated with the latest features and offers.</p>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" /></a>
                            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" /></a>
                            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" /></a>
                            <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
