import React from 'react'
import { useState, useEffect } from 'react';

export default function Table() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUsers(data));
      }, []);

  return (
    <div>
        <h1>THE API TABLE</h1>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>CONTACT NO</th>
                    <th>WEBSITE</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
