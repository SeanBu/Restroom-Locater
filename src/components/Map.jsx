import { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Map(props) {
    const [markers, setMarkers] = useState(null)


    async function fetchData() {
        try {
            const response = await fetch("/getmarkers", { headers: { "Content-type": "application/json" } });
            const incMarkers = await response.json();
            console.log(incMarkers);
            setMarkers(incMarkers)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const center = useMemo(() => ({ lat: 40.874898061359595, lng: -73.88778667684886 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPAPIKEY,
    })

    if (!isLoaded) return <div>Loading...</div>
    return (
        < div >
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {markers ? markers.map(marker => {
                    return <MarkerF onClick={() => props.setRestInfo(marker)} position={{ lat: marker.lat, lng: marker.lng }} />
                }) : console.log('Loading markers...')}
            </GoogleMap>
        </div >
    )
}


export default Map;