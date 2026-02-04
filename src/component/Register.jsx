import { Link } from 'react-router-dom';
import './register.css';

function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h1>Welcome to Registration</h1>

                <div className="input-group">
                    <input type="text" name="Fname" placeholder="First Name" required />
                </div>

                <div className="input-group">
                    <input type="text" name="Lname" placeholder="Last Name" required />
                </div>

                <div className="input-group">
                    <input type="text" name="address" placeholder="Address" required />
                </div>

                <div className="gender-group">
                    <label>Gender:</label>
                    <div className="gender-options">
                        <div className="gender-option">
                            <input type="radio" id="male" name="gender" value="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="gender-option">
                            <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="register-button">Submit</button>

                <p className="login-link">
                    <Link to="/login">Already have an account? Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
