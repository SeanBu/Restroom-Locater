import { useEffect, useState } from 'react';

function Submissions() {
    const [submissions, setSubmissions] = useState([]);

    async function fetchData() {
        const response = await fetch("/admin/allsubmissions", { headers: { "Content-type": "application/json" } });
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
                    <div>
                        <p>Submission Id: {submission._id}</p>
                        <p>User Id: {submission.user}</p>
                        <p>Restroom Id: {submission.restroom}</p>
                        <br></br>
                    </div>
                )
            }) : console.log("Loading Users...")}
        </div>
    )
}

export default Submissions;