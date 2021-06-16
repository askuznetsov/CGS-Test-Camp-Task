import { Link } from "react-router-dom";
type CompleteStatus = 'Completed' | 'Not Compelted';
type PrivacyStatus = 'Private' | 'Public'; 

interface IInfo {
    title: string;
    year: number;
    description: string;
    completed: CompleteStatus;
    privacy: PrivacyStatus;
}
interface Props {
    id: number;
    info: IInfo;
    deleteSingleTask(id:number): void;

}
const SingleTask = (props:Props) => {
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
