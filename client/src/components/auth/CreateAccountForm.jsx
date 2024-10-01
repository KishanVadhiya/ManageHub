import PropTypes from 'prop-types'; // Import PropTypes
import styles from "./Create.module.css" // Import the CSS module

const CreateAccountForm = ({ onSignInClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Create an Account</h2>
                <form>
                    <div className={styles.inputGroup}>
                        <label>
                            First Name
                            <input type="text" placeholder="Input First name" required />
                        </label>
                        <label>
                            Last Name
                            <input type="text" placeholder="Input Last name" required />
                        </label>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="example.email@gmail.com" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter at least 8+ characters"  autoComplete="off" required />
                    <button type="submit">Create New Account</button>
                </form>
                <div  className={styles.forgotPassword}>
                    <a href="#">Forgot Password</a>
                </div>
                <div className={styles.socialLogin}>
                    <p>Already have an account? <a href="#" className={styles.signIn} onClick={onSignInClick}>Sign in?</a></p>
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
