import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { getAllUsers } from '../db';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const users = await getAllUsers();
            const user = users.find(u => u.firstName === username && u.password === password);
            
            if (user) {
                navigate('/Dashboard');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="input-group">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit" className="login-button">Login</button>
                <p className="signup-link">
                    <Link to="/register">Create new account</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
