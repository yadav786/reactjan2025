import React, { useState, useEffect } from 'react';
export function UserLists() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let dataRes = await fetch('https://jsonplaceholder.typicode.com/users');
            dataRes = await dataRes.json();
            setUsers(dataRes);
        }
        fetchData();
        async function fetchDataHello() {
            try {
                let dataRes = await fetch('/api');
            dataRes = await dataRes.text();
            setUsers(dataRes);
            } catch(err) {
                console.log(`getting network error ${err?.message}`);
            }
        }
        fetchDataHello();
    }, []);
    return <>
    <h1>User Lists</h1>
    <ul>
        {users.map(user => <li key={user.id} style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.username}</div>
            <div>{user.phone}</div>
        </li>)}
    </ul>
    </>;
  }