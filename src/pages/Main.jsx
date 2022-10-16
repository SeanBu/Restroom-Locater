import { useState } from 'react';
import Map from '../components/Map';
import AddLocationButton from '../components/AddLocationButton';
import RestroomInfo from '../components/RestroomInfo';

function Main() {

    const [restInfo, setRestInfo] = useState([])

    return (
        <div className='main'>
            <Map setRestInfo={setRestInfo} />
            <AddLocationButton />
            <RestroomInfo restInfo={restInfo} />
        </div>
    )
}

export default Main;