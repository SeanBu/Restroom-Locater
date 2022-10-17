import { useEffect, useState } from 'react';
import styles from '../components/css/Admin.module.css';
import { Helmet } from 'react-helmet';

function Submissions() {
    const [submissions, setSubmissions] = useState([]);

    async function fetchData() {
        const response = await fetch("https://restroom-locater.herokuapp.com/admin/allsubmissions", { headers: { "Content-type": "application/json" } });
        const jResponse = await response.json();
        setSubmissions(...jResponse);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>

            {submissions ? submissions.map(submission => {
                return (
                    <div className={styles.submissionsContainer}>
                        <Helmet>
                            <style>{'body { background-color: black; }'}</style>
                        </Helmet>
                        <div className={styles.submissionsHeader}>
                            <p>Submission Id: <div className={styles.submissionsData}>{submission._id}</div></p>
                        </div>
                        <div className={styles.submissionsHeader}>
                            <p>User Id: <div className={styles.submissionsData}>{submission.user}</div></p>
                        </div>
                        <div className={styles.submissionsHeader}>
                            <p>Restroom Id: <div className={styles.submissionsData}>{submission.restroom}</div></p>
                        </div>
                        <br></br>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Submissions;