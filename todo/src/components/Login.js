import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <form>
                <h1>Login</h1>
                <label htmlFor="name"> Username / Email</label>
                <input type="text" id="name" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button>
                    <Link to="/homepage">Login</Link>
                </button>
            </form>
        </div>
    );
}

export default Login;
