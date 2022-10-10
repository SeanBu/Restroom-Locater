import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPAPIKEY,
    })

    if (!isLoaded) return <div>Loading...</div>
    return (
        < div >
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <MarkerF position={center} />
            </GoogleMap>
        </div >
    )
}

export default Map;