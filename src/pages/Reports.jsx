import { useEffect, useState } from 'react';
import styles from '../components/css/Admin.module.css';
import { Helmet } from 'react-helmet';

function Reports() {
    const [reports, setReports] = useState([])

    async function fetchData() {
        const response = await fetch("/admin/reports", { headers: { "Content-type": "application/json" } });
        const jResponse = await response.json();
        setReports(...jResponse)
    }

    async function deleteSubmission(submission) {

        const toDelete = {
            subId: submission._id,
            restId: submission.restroom._id
        }

        const config = {
            method: "DELETE",
            body: JSON.stringify(toDelete),
            headers: {
                "Content-type": "application/json"
            }
        }

        const response = await fetch('/admin/reports/delete', config);
        const sResponse = await response.json();
        console.log(sResponse);
    }

    console.log(reports)

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            {reports ? reports.map(submission => {
                return (<div className={styles.reportContainer}>
                    <div className={styles.reportImage}>
                        <img src={submission.restroom.image} alt="restroom image"></img>
                    </div>
                    <div className={styles.reportHeader}>
                        <p>Address: <div className={styles.reportData}>{submission.restroom.address}</div></p>
                    </div>
                    <div className={styles.reportHeader}>
                        <p>Description: <div className={styles.reportData}>{submission.restroom.description}</div></p>
                    </div>
                    <div className={styles.reportHeader}>
                        <p>Authors User Id: <div className={styles.reportData}>{submission.user._id}</div></p>
                    </div>
                    <div className={styles.reportHeader}>
                        <p>Author: <div className={styles.reportData}>{submission.user.username}</div></p>
                    </div>
                    <div className={styles.reportHeader}>
                        <p>Author Email: <div className={styles.reportData}>{submission.user.email}</div></p>
                    </div>
                    <div className={styles.deleteButton}>
                        <button onClick={() => deleteSubmission(submission)}>Delete</button>
                    </div>
                </div>)
            }) : console.log("Loading Reports...")}
        </div>
    )
}

export default Reports;