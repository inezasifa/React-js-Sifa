import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="input-group">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit" className="login-button"><Link to="/Dashboard">Login</Link></button>
                <p className="signup-link">
                    <Link to="/register">Create new account</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
