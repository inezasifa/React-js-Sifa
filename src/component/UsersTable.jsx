import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../db';
import './UsersTable.css';

function UsersTable() {
    const [users, setUsers] = useState([]);

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

    return (
        <div className="users-table-container">
            <h1>Registered Users</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Registered At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.address}</td>
                            <td>{user.gender}</td>
                            <td>{new Date(user.registeredAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/Dashboard" className="back-button">Back to Dashboard</Link>
        </div>
    );
}

export default UsersTable;
