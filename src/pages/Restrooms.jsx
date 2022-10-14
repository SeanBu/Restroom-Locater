import { useEffect, useState } from 'react';

function Restrooms() {

    const [restrooms, setRestrooms] = useState([]);

    async function fetchData() {
        const response = await fetch("/admin/allrestrooms", { headers: { "Content-type": "application/json" } });
        const jResponse = await response.json();
        setRestrooms(...jResponse);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {restrooms ? restrooms.map(restroom => {
                return (
                    <div>
                        <p>Restroom Id: {restroom._id}</p>
                        <p>Lat: {restroom.lat}</p>
                        <p>Lng Email: {restroom.lng}</p>
                        <p>Address: {restroom.address}</p>
                        <p>Cleanliness Rating: {restroom.cleanlinessRating}</p>
                        <p>Location Rating: {restroom.locationRating}</p>
                        <p>Description: {restroom.description}</p>
                        <p>Image:</p>
                        <img src={restroom.image} alt="Restroom Image"></img>
                        <br></br>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Restrooms;