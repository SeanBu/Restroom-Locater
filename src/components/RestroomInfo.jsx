function RestroomInfo(props) {
    return (
        <div>
            <h1>Latitude: {props.restInfo.lat}</h1>
            <h1>Longitude: {props.restInfo.lng}</h1>
            <h1>Address: {props.restInfo.address}</h1>
            <h1>Cleanliness Rating: {props.restInfo.cleanlinessRating}</h1>
            <h1>Location Rating: {props.restInfo.locationRating}</h1>
            <h1>Description: {props.restInfo.description}</h1>
            <h1>{props.restInfo.image}</h1>
        </div>
    )
}

export default RestroomInfo;