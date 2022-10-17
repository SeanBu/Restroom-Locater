import { useEffect, useState } from 'react';
import styles from '../components/css/Admin.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
                    <div className={styles.restroomContainer}>
                        <Helmet>
                            <style>{'body { background-color: black; }'}</style>
                        </Helmet>
                        <div className={styles.restroomHeader}>
                            <p>Restroom Id: <div className={styles.restroomData}>{restroom._id}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Lat: <div className={styles.restroomData}>{restroom.lat}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Lng Email: <div className={styles.restroomData}>{restroom.lng}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Address: <div className={styles.restroomData}>{restroom.address}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Cleanliness Rating: <div className={styles.restroomData}>{restroom.cleanlinessRating}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Location Rating: <div className={styles.restroomData}>{restroom.locationRating}</div></p>
                        </div>
                        <div className={styles.restroomHeader}>
                            <p>Description: <div className={styles.restroomData}>{restroom.description}</div></p>
                        </div>
                        <div className={styles.restroomImage}>
                            <img src={restroom.image} alt="Restroom Image"></img>
                        </div>
                        <Link to={`/admin/restrooms/edit/${restroom._id}`}>Edit Restroom</Link>
                        <br></br>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Restrooms;