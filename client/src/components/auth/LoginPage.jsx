// import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styles from './login.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            // Navigate to the home page or dashboard after login
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Sign In</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="example.email@gmail.com"
                />
                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password"
                />
                <button type="submit">Sign In</button>
            </form>
            <div className={styles.navigation}>
                <p>Don&apos;t have an account? 
                    {/* <Link to="/signup"> Register</Link> */}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;