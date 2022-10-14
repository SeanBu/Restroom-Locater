import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Adminlinks() {
    const [reports, setReports] = useState(0);
    const [restrooms, setRestrooms] = useState(0);
    const [users, setUsers] = useState(0);
    const [submissions, setSubmissions] = useState(0);

    async function fetchData() {
        const reportsResponse = await fetch("/admin/numreports", { headers: { "Content-type": "application/json" } });
        const jReportsResponse = await reportsResponse.json();

        const restroomsResponse = await fetch("admin/restrooms", { headers: { "Content-type": "application/json" } })
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
        <div>
            <Link to="/admin/reports">Reports {`[${reports}]`}</Link>
            <br></br>
            <Link to="/admin/restrooms">Restrooms {`[${restrooms}]`}</Link>
            <br></br>
            <Link to="/admin/users">Users {`[${users}]`}</Link>
            <br></br>
            <Link to="/admin/submissions">Submissions {`[${submissions}]`}</Link>
        </div>
    )
}

export default Adminlinks;