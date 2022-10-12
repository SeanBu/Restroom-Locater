import Map from '../components/Map';

function Main() {

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
    }

    return (
        <div>
            <Map />
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default Main;