import { Link } from 'react-router-dom'

function AddLocationButton() {
    return (
        <div>
            <Link to="/addlocation">
                <button>Add New Restroom</button>
            </Link>
        </div>
    )
}

export default AddLocationButton;