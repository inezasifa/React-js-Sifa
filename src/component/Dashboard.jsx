import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css'
import eImage from './h.jpg';
import videoBg from './sifa.mp4';
import { getAllUsers } from '../db';

function Dashboard(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const allUsers = await getAllUsers();
            setUsers(allUsers);
        } catch (error) {
            console.error('Failed to load users:', error);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return(
        <div>
            <video className="background-video" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="h1">
                <label onClick={toggleMenu} style={{ cursor: 'pointer' }}>☰</label>
               <center>
                 <h1>Welcome to admin page</h1>
               </center>
            </div>
            {isMenuOpen && (
                <div className="nav-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            )}
            <div className="dashboard-content">
                <div className="cards-container">
                    <div className="card">
                        <h3>Registered Users</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card">
                        <h3>My Image</h3>
                        <p><img src={eImage} alt="" srcset="" /></p>
                    </div>
                    <div className="card">
                        <h3>Card 3</h3>
                        <p>This is the third card with recent activity logs.</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-media">
                        <a href="https://www.facebook.com/sifaaaa1" className="social-icon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" /></a>
                        <a href="https://www.instagram.com/s.i.f.a_a/" className="social-icon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" /></a>
                        <a href="#" className="social-icon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg" alt="TikTok" /></a>
                        <a href="https://www.youtube.com/@Sifa-q1z" className="social-icon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" /></a>
                        <a href="#" className="social-icon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X" /></a>
                    </div>
                    <div className="contact-info">
                        <p>Email: inezasifa31@gmail.com</p>
                        <p>Contact: +250 7918 936 30</p>
                        <p><Link to="/users" style={{ color: 'white', textDecoration: 'underline' }}>View Registered Users</Link></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Dashboard
 
