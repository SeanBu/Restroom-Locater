import { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Map() {
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

    console.log(markers)

    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPAPIKEY,
    })

    if (!isLoaded) return <div>Loading...</div>
    return (
        < div >
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <MarkerF position={center} />
                {markers ? markers.map(marker => {
                    return <MarkerF onClick={() => console.log("marker click")} position={{ lat: marker.lat, lng: marker.lng }} />
                }) : console.log('Loading markers...')}
            </GoogleMap>
        </div >
    )
}


export default Map;