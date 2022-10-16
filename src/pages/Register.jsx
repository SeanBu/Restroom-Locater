import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Register() {

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const user = {
            username: form[0].value,
            email: form[1].value,
            password: form[2].value
        }

        const config = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        }

        const response = await fetch('https://restroom-locater.herokuapp.com/auth/register', config);
        const currentUser = await response.json();

        console.log(response);
        console.log(currentUser);

        localStorage.setItem("token", currentUser.token);
        navigate("/login");
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
        <form onSubmit={handleLogin}>
            <label htmlFor='username'>Username:</label>
            <input required type="text" name='username' />
            <label htmlFor='=email'>Email:</label>
            <input required type="email" name='email' />
            <label htmlFor='password'>Password:</label>
            <input required type="password" name='password' />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Register;