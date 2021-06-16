import { Link, useParams } from "react-router-dom";

const EditTask = (props) => {
    const editTask = event => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const year = document.getElementById("year").value;

        let privacy;
        document.getElementById("privacy").checked
            ? (privacy = "Public")
            : (privacy = "Private");

        let completed;
        document.getElementById("completed").checked
            ? (completed = "Completed")
            : (completed = "Not completed");
        
        const updatedInfo = {title, description, year, privacy, completed}
        props.editTask(updatedInfo, id);
    };

    let { id } = useParams();
    let info;
    const getInfoaboutTask = () => {
        info = props.taskInfo(id);
    }
    getInfoaboutTask();

    return (
        <div>
            <form>
                <h1>Edit Todo</h1>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" defaultValue={info.title}/>
                <label htmlFor="description">Description</label>
                <textarea id="description" defaultValue={info.description}/>
                <label htmlFor="year">Year</label>
                <input type="text" id="year" defaultValue={info.year}/>
                <label htmlFor="privacy">Public</label>
                <input type="checkbox" id="privacy" defaultChecked={info.privacy === "Public" ? true : false}/>
                <label htmlFor="completed">Completed</label>
                <input type="checkbox" id="completed" defaultChecked={info.completed === "Completed" ? true : false}/>
                <button onClick={editTask}>
                    <Link to="/homepage">Edit</Link>
                </button>
            </form>
        </div>
    );
}

export default EditTask;
