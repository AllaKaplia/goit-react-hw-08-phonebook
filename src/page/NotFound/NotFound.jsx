import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div>
            <Link to="/">
                <button type="button">
                    Go Back Home
                </button>
            </Link>
            <span>Unfortunately, no such page was found :(</span> 
        </div>
    );
}

export default NotFound;