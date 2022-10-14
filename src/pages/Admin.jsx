import { useEffect, useState } from 'react';

function Admin() {
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
            {reports ? reports.map(submission => {
                return (<div>
                    <p>Address: {submission.restroom.address}</p>
                    <p>Description: {submission.restroom.description}</p>
                    <img src={submission.restroom.image} alt="restroom image"></img>
                    <p>Authors User Id: {submission.user._id}</p>
                    <p>Author: {submission.user.username}</p>
                    <p>Author Email: {submission.user.email}</p>
                    <button onClick={() => deleteSubmission(submission)}>Delete</button>
                </div>)
            }) : console.log("Loading Reports...")}
        </div>
    )
}

export default Admin;