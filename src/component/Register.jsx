import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { addUser } from '../db';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            firstName: formData.get('Fname'),
            lastName: formData.get('Lname'),
            address: formData.get('address'),
            password: formData.get('password'),
            gender: formData.get('gender'),
            registeredAt: new Date().toISOString()
        };
        
        try {
            await addUser(userData);
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
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

                <div className="input-group">
                    <input type="password" name="password" placeholder="Password" required />
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
