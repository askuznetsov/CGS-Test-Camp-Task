import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <form>
                <h1>Register</h1>
                <label htmlFor="name">Username</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <label htmlFor="verifypass">Verify password</label>
                <input type="password" id="verifypass" />
                <button>
                    <Link to="/homepage">Register</Link>
                    {/* Register */}
                </button>
            </form>
        </div>
    );
}

// function buttonHandler() {
//     if (checkFieldsAreCorrect()) {
//         return <Link to="/homepage">Register</Link>;
//     }
// }

// function checkFieldsAreCorrect() {
//     return true;
// }

export default Register;
