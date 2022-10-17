import { useNavigate } from 'react-router';

function AddLocation() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {


        try {
            e.preventDefault();

            const form = e.target;

            const location = {
                lat: form[0].value,
                lng: form[1].value,
                address: form[2].value,
                cleanlinessRating: form[3].value,
                locationRating: form[4].value,
                description: form[5].value,
                image: form[6].value,
                currentUserId: localStorage.getItem("currentUserId")
            }

            const config = {
                method: "POST",
                body: JSON.stringify(location),
                headers: {
                    "Content-type": "application/json"
                }
            }

            const response = await fetch('/newlocation', config);
            const newLocation = await response.json();
            console.log(newLocation);

            if (newLocation) navigate("/");

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lat">Lat: </label>
                <input id="lat"></input>
                <br></br>
                <label htmlFor="lng">Lng: </label>
                <input id="lng"></input>
                <br></br>
                <label htmlFor="address">Street Address: </label>
                <input id="address"></input>
                <br></br>
                <label htmlFor="cleanrating">Cleanliness Rating: </label>
                <input id="cleanrating"></input>
                <br></br>
                <label htmlFor="locrating">Location Rating: </label>
                <input id="locrating"></input>
                <br></br>
                <label htmlFor="description">Description: </label>
                <input id="description"></input>
                <br></br>
                <label htmlFor="image">Image</label>
                <input id="image"></input>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddLocation;