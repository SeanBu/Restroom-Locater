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
                    <h1>Latitude: {props.restInfo.lat}</h1>
                </div>
                <div className={styles.lng}>
                    <h1>Longitude: {props.restInfo.lng}</h1>
                </div>
                <div className={styles.address}>
                    <h1>Address: {props.restInfo.address}</h1>
                </div>
                <div className={styles.cRating}>
                    <h1>Cleanliness Rating: {props.restInfo.cleanlinessRating}</h1>
                </div>
                <div className={styles.lRating}>
                    <h1>Location Rating: {props.restInfo.locationRating}</h1>
                </div>
                <div className={styles.description}>
                    <h1>Description: {props.restInfo.description}</h1>
                </div>
                <div className={styles.img}>
                    <img src={props.restInfo.image}></img>
                </div>
            </div>
            <button className={styles.reportButton} onClick={() => reportRestroom(props.restInfo.restroom)}>Report Submission</button>
        </div>
    )
}

export default RestroomInfo;