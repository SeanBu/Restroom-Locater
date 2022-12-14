import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import styles from '../components/css/Form.module.css';

function Login() {

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        }

        const config = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        }

        const response = await fetch('/auth/login', config);
        const currentUser = await response.json();

        console.log(response);
        console.log(currentUser);

        localStorage.setItem("currentUserId", currentUser.id);
        localStorage.setItem("token", currentUser.token);
        navigate("/");
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://restroom-locater.herokuapp.com/auth/isUserAuth", { headers: { "x-access-token": localStorage.getItem("token") } });
            const sResponse = await response.json();
            if (sResponse.isLoggedIn) navigate("/");
        }
        fetchData();
    }, [])

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleLogin}>
                <div className={styles.inputContainer}>
                    <label className={styles.username} for="username">Username </label>
                    <input className={styles.iUsername} id="username" required type="text" />
                </div>
                <br></br>
                <div className={styles.inputContainer}>
                    <label className={styles.password} for="password">Password</label>
                    <input className={styles.iPassword} id="password" required type="password" />
                </div>
                <br></br>
                <input className={styles.loginButton} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;