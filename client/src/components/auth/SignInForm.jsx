import PropTypes from 'prop-types';
import styles from "./login.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported

const SignInForm = ({ onBackClick }) => {
    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Hook for navigation

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous errors

        try {
            // Send API request to login
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });
            
            const { token } = response.data; // Assuming token is returned in the response
            
            // Store the token in localStorage
            localStorage.setItem('token', token);

            // Redirect to home page after successful login
            navigate('/');

        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Sign in</h2>
                {error && <p className={styles.error}>{error}</p>} {/* Display error if it exists */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="example.email@gmail.com" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} // Handle input change
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter at least 8+ characters" 
                        autoComplete="off" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} // Handle input change
                    />
                    <button type="submit">Sign in</button>
                </form>
                <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                <p>Don&apos;t have an account? 
                    <a href="#" className={styles.signUp} onClick={onBackClick}> Register</a>
                </p>
            </div>
            <div className={styles.illustrationSection}>
                {/* Optional Illustration */}
            </div>
        </div>
    );
};

// PropTypes for SignInForm
SignInForm.propTypes = {
    onBackClick: PropTypes.func.isRequired,
};

export default SignInForm;
