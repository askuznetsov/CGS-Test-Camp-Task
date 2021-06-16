import { Link } from "react-router-dom";

function CreateNew(props) {
    const addNewTask = event => {
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

        props.addTask({
            title: title,
            description: description,
            year: year,
            privacy: privacy,
            completed: completed
        });
    };

    return (
        <div>
            <form>
                <h1>Create new Todo</h1>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
                <label htmlFor="description">Description</label>
                <textarea id="description" />
                <label htmlFor="year">Year</label>
                <input type="text" id="year" />
                <label htmlFor="privacy">Public</label>
                <input type="checkbox" id="privacy" />
                <label htmlFor="completed">Completed</label>
                <input type="checkbox" id="completed" />
                <button onClick={addNewTask}>
                    <Link to="/homepage">Create</Link>
                </button>
            </form>
        </div>
    );
}

export default CreateNew;
