import { useState } from 'react';
import Map from '../components/Map';
import AddLocationButton from '../components/AddLocationButton';
import RestroomInfo from '../components/RestroomInfo';

function Main() {

    const [restInfo, setRestInfo] = useState({ lat: 0, lng: 0 })

    return (
        <div>
            <Map setRestInfo={setRestInfo} />
            <AddLocationButton />
            <RestroomInfo restInfo={restInfo} />
        </div>
    )
}

export default Main;