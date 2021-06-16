import { Link } from "react-router-dom";

const HomePage = (props) => {
    const taskList = props.tasks.map((task, index) => {
        return (
            <div key={index}>
                <hr />
                <div>{task}</div>
            </div>
        );
    });
    
    return (
        <div>
            <button>
                <Link to="/createnew">Create New</Link>
            </button>
            {taskList}
        </div>
    );
}

export default HomePage;
