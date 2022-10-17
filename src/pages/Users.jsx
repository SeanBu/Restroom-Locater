import { useEffect, useState } from 'react';
import styles from '../components/css/Admin.module.css';
import { Helmet } from 'react-helmet';

function Users() {

    const [users, setUsers] = useState([]);

    async function fetchData() {
        const response = await fetch("https://restroom-locater.herokuapp.com/admin/allusers", { headers: { "Content-type": "application/json" } });
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
                    <div className={styles.usersContainer}>
                        <Helmet>
                            <style>{'body { background-color: black; }'}</style>
                        </Helmet>
                        <div className={styles.usersHeader}>
                            <p>User Id: <div className={styles.usersData}>{user._id}</div></p>
                        </div>
                        <div className={styles.usersHeader}>
                            <p>Username: <div className={styles.usersData}>{user.username}</div></p>
                        </div>
                        <div className={styles.usersHeader}>
                            <p>User Email: <div className={styles.usersData}>{user.email}</div></p>
                        </div>
                        <div className={styles.usersHeader}>
                            <p>User Submissions: <div className={styles.usersData}>{user.submissions.length}</div></p>
                        </div>
                        <br></br>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Users;