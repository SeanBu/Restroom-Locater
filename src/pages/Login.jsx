import { useNavigate } from 'react-router';
import { useEffect } from 'react';


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

        localStorage.setItem("currentUserId", currentUser.id)
        localStorage.setItem("token", currentUser.token)
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/auth/isUserAuth", { headers: { "x-access-token": localStorage.getItem("token") } });
            const sResponse = await response.json();
            if (sResponse.isLoggedIn) navigate("/");
        }
        fetchData();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <input required type="text" />
            <input required type="password" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login;