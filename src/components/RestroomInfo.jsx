import styles from '../components/css/RestroomInfo.module.css'

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
        <div className={styles.superContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.lat}>
                    <h1>Latitude: </h1><p>{props.restInfo.lat}</p>
                </div>
                <div className={styles.lng}>
                    <h1>Longitude: </h1><p>{props.restInfo.lng}</p>
                </div>
                <div className={styles.address}>
                    <h1>Address: </h1><p>{props.restInfo.address}</p>
                </div>
                <div className={styles.cRating}>
                    <h1>Cleanliness Rating: </h1><p>{props.restInfo.cleanlinessRating}</p>
                </div>
                <div className={styles.lRating}>
                    <h1>Location Rating: </h1><p>{props.restInfo.locationRating}</p>
                </div>
                <div className={styles.description}>
                    <h1>Description: </h1><p>{props.restInfo.description}</p>
                </div>
                <div className={styles.img}>
                    <img src={props.restInfo.image} alt="restroom"></img>
                </div>
            </div>
            <button className={styles.reportButton} onClick={() => reportRestroom(props.restInfo.restroom)}>Report Submission</button>
        </div>
    )
}

export default RestroomInfo;