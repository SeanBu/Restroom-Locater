import Map from '../components/Map';
import AddLocationButton from '../components/AddLocationButton';

function Main() {

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
    }

    return (
        <div>
            <Map />
            <AddLocationButton />
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default Main;