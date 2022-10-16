import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../components/css/Admin.module.css';
import { Helmet } from 'react-helmet';

function Adminlinks() {
    const [reports, setReports] = useState(0);
    const [restrooms, setRestrooms] = useState(0);
    const [users, setUsers] = useState(0);
    const [submissions, setSubmissions] = useState(0);

    async function fetchData() {
        const reportsResponse = await fetch("/admin/numreports", { headers: { "Content-type": "application/json" } });
        const jReportsResponse = await reportsResponse.json();

        const restroomsResponse = await fetch("admin/restrooms", { headers: { "Content-type": "application/json" } });
        const jRestroomsResponse = await restroomsResponse.json();

        const usersResponse = await fetch("/admin/users", { headers: { "Content-type": "application/json" } });
        const jUsersResponse = await usersResponse.json();

        const submissionsResponse = await fetch("admin/submissions", { headers: { "Content-type": "application/json" } });
        const jSubmissionsResponse = await submissionsResponse.json();

        setReports(jReportsResponse);
        setRestrooms(jRestroomsResponse);
        setUsers(jUsersResponse);
        setSubmissions(jSubmissionsResponse);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className={styles.linksContainer}>
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div className={styles.adminLink}>
                <Link to="/admin/reports">Reports <div className={styles.adminTotals}>{`[${reports}]`}</div></Link>
            </div>
            <div className={styles.adminLink}>
                <Link to="/admin/restrooms">Restrooms <div className={styles.adminTotals}>{`[${restrooms}]`}</div></Link>
            </div>
            <div className={styles.adminLink}>
                <Link to="/admin/users">Users <div className={styles.adminTotals}>{`[${users}]`}</div></Link>
            </div>
            <div className={styles.adminLink}>
                <Link to="/admin/submissions">Submissions <div className={styles.adminTotals}>{`[${submissions}]`}</div></Link>
            </div>
        </div>
    )
}

export default Adminlinks;