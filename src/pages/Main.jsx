import { useState } from 'react';
import Map from '../components/Map';
import AddLocationButton from '../components/AddLocationButton';
import RestroomInfo from '../components/RestroomInfo';

function Main() {

    const [restInfo, setRestInfo] = useState({ lat: 0, lng: 0 })

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
    }

    return (
        <div>
            <Map setRestInfo={setRestInfo} />
            <AddLocationButton />
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
            <RestroomInfo restInfo={restInfo} />
        </div>
    )
}

export default Main;