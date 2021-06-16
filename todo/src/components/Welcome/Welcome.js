import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <button>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/register">Register</Link>
            </button>
        </div>
    );
}

export default Welcome;
