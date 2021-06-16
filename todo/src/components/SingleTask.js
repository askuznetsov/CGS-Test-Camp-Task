import { Link } from "react-router-dom";

function SingleTask(props) {
    const deleteTask = () => {
        props.deleteSingleTask(props.id);
    };

    const { title, year, description, completed, privacy } = props.info;

    return (
        <div>
            <p>
                {title}, {year}
            </p>
            <p>{description}</p>
            <p>
                {completed} {privacy}
            </p>
            <button>
                <Link to={`/edittask/${props.id}`}>Edit</Link>
            </button>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default SingleTask;
