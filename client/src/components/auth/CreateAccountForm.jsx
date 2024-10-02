import PropTypes from 'prop-types'; // Import PropTypes
import styles from "./Create.module.css"; // Import the CSS module
import { useState } from 'react';
import axios from 'axios'; // Import axios for API call

const CreateAccountForm = ({ onSignInClick }) => {
    // State for form fields
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
    const [error, setError] = useState(null); // State to handle errors

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous errors

        try {
            // Send API request to create a new user
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                name: firstname + " " + lastname,
                email,
                password,
            });
            console.log('Account created:', response.data);
            console.log("\n\n\n\n\n\n")
            console.log(onSignInClick);
            // onSignInClick;
            // Optionally handle a redirect or success message here
        } catch (error) {
            console.error('Error creating account:', error);
            setError('Failed to create account. Please try again.');
        }
        
    };

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Create an Account</h2>
                {error && <p className={styles.error}>{error}</p>} {/* Display error if exists */}
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>
                            First Name
                            <input 
                                type="text" 
                                placeholder="Input First name" 
                                required 
                                value={firstname} 
                                onChange={(e) => setFirstname(e.target.value)} // Handle input change
                            />
                        </label>
                        <label>
                            Last Name
                            <input 
                                type="text" 
                                placeholder="Input Last name" 
                                required 
                                value={lastname} 
                                onChange={(e) => setLastname(e.target.value)} // Handle input change
                            />
                        </label>
                    </div>
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
                    <button type="submit">Create New Account</button>
                </form>
                <div className={styles.forgotPassword}>
                    <a href="#">Forgot Password</a>
                </div>
                <div className={styles.socialLogin}>
                    <p>Already have an account? 
                        <a href="#" className={styles.signIn} onClick={onSignInClick}>Sign in?</a>
                    </p>
                </div>
            </div>
            <div className={styles.illustrationSection}>
                <img src="illustration.svg" alt="Illustration" />
            </div>
        </div>
    );
};

// PropTypes for CreateAccountForm
CreateAccountForm.propTypes = {
    onSignInClick: PropTypes.func.isRequired,
};

export default CreateAccountForm;
