import { useEffect, useState } from 'react';

function Users() {

    const [users, setUsers] = useState([]);

    async function fetchData() {
        const response = await fetch("/admin/allusers", { headers: { "Content-type": "application/json" } });
        const jResponse = await response.json();
        setUsers(...jResponse);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(users);

    return (
        <div>
            {users ? users.map(user => {
                return (
                    <div>
                        <p>User Id: {user._id}</p>
                        <p>Username: {user.username}</p>
                        <p>User Email: {user.email}</p>
                        <p>User Submissions: {user.submissions}</p>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Users;