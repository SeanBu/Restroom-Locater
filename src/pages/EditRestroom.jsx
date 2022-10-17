import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom'

function EditRestroom() {

    const [restroomInfo, setRestroomInfo] = useState();

    // const initialState = {
    //     lat: restroomInfo.lat,
    //     lng: restroomInfo.lng,
    //     address: restroomInfo.address,
    //     cleanlinessRating: restroomInfo.cleanlinessRating,
    //     locationRating: restroomInfo.locationRating,
    //     description: restroomInfo.description,
    //     image: restroomInfo.image
    // }

    const [newForm, setNewForm] = useState();
    let { restroomID } = useParams();

    const navigate = useNavigate();

    const handleEdit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const restroom = {
            lat: form[0].value,
            lng: form[1].value,
            address: form[2].value,
            cleanlinessRating: form[3].value,
            locationRating: form[4].value,
            description: form[5].value,
            image: form[6].value
        }

        const config = {
            method: "PUT",
            body: JSON.stringify(restroom),
            headers: {
                "Content-type": "application/json"
            }
        }

        const response = await fetch(`/admin/editrestroom/${restroomID}`, config);
        const currentRestroom = await response.json();
        console.log(currentRestroom);
        navigate("/admin/restrooms");

    }

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/admin/editrestroom/${restroomID}`, { headers: { "Content-type": "application/json" } });
            const sResponse = await response.json();
            setRestroomInfo(sResponse);
            setNewForm(sResponse);
        }
        fetchData();
    }, [])

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label for="lat">Restroom Lat </label>
                <input name="lat" onChange={handleChange} value={newForm ? newForm.lat : "Loading Data..."}></input>
                <br></br>
                <label for="lng">Restroom Lng </label>
                <input name="lng" onChange={handleChange} value={newForm ? newForm.lng : "Loading Data..."}></input>
                <br></br>
                <label for="address">Restroom Address </label>
                <input name="address" onChange={handleChange} value={newForm ? newForm.address : "Loading Data..."}></input>
                <br></br>
                <label for="cRating">Cleanliness Rating </label>
                <input name="cRating" onChange={handleChange} value={newForm ? newForm.cleanlinessRating : "Loading Data..."}></input>
                <br></br>
                <label for="lRating">Location Rating </label>
                <input name="lRating" onChange={handleChange} value={newForm ? newForm.locationRating : "Loading Data..."}></input>
                <br></br>
                <label for="description">Description </label>
                <input name="description" onChange={handleChange} value={newForm ? newForm.description : "Loading Data..."}></input>
                <br></br>
                <label for="image">Image: </label>
                <input name="image" onChange={handleChange} value={newForm ? newForm.image : "Loading Data..."}></input>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditRestroom;