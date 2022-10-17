import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function EditRestroom() {

    let { id } = useParams();

    const [restroomInfo, setRestroomInfo] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/admin/editrestroom/${id}`, { headers: { "Content-type": "application/json" } });
            const sResponse = await response.json();
            setRestroomInfo(sResponse)
        }
        fetchData();
    }, [])

    return (
        <div>
            <form>
                <label>Restroom Lat </label>
                <input value={restroomInfo ? restroomInfo.lat : 'Loading Data...'}></input>
                <label>Restroom Lng </label>
                <input value={restroomInfo ? restroomInfo.lng : 'Loading Data...'}></input>
                <label>Restroom Address </label>
                <input value={restroomInfo ? restroomInfo.address : 'Loading Data...'}></input>
                <label>Cleanliness Rating </label>
                <input value={restroomInfo ? restroomInfo.cleanlinessRating : 'Loading Data...'}></input>
                <label>Location Rating </label>
                <input value={restroomInfo ? restroomInfo.locationRating : 'Loading Data...'}></input>
                <label>Description </label>
                <input value={restroomInfo ? restroomInfo.description : 'Loading Data...'}></input>
                <label>Image: </label>
                <input value={restroomInfo ? restroomInfo.image : 'Loading Data...'}></input>
            </form>
        </div>
    )
}

export default EditRestroom;