import PropTypes from 'prop-types'; // Import PropTypes
import styles from "./login.module.css" // Import the CSS module

const SignInForm = ({ onBackClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Sign in</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="example.email@gmail.com" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter at least 8+ characters" autoComplete="off" required />
                    <button type="submit">Sign in</button>
                </form>
                <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                <p>Don&apos;t have an account? <a href="#" className={styles.signUp} onClick={onBackClick}> Register</a></p>
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
