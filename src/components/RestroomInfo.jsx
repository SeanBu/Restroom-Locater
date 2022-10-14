function RestroomInfo(props) {

    async function reportRestroom(restroom) {

        const reportedRestroom = {
            restroom: restroom
        }

        const configs = {
            method: "PUT",
            body: JSON.stringify(reportedRestroom),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch('/admin/report', configs);
        const sResponse = await response.json();
        console.log(sResponse);
    }

    return (
        <div>
            <h1>Latitude: {props.restInfo.lat}</h1>
            <h1>Longitude: {props.restInfo.lng}</h1>
            <h1>Address: {props.restInfo.address}</h1>
            <h1>Cleanliness Rating: {props.restInfo.cleanlinessRating}</h1>
            <h1>Location Rating: {props.restInfo.locationRating}</h1>
            <h1>Description: {props.restInfo.description}</h1>
            <img src={props.restInfo.image}></img>
            <button onClick={() => reportRestroom(props.restInfo.restroom)}>Report Submission</button>
        </div>
    )
}

export default RestroomInfo;