import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./User";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param user:ref => User._id
 * @param Title:string
 * @param Description:string
 * @param Year:string
 * @param isPublic:boolean
 * @param isCompleted:boolean
 */
export interface ITodo extends Document {
    user: IUser["_id"];
    Title: string;
    Description: string;
    Year: string;
    isPublic:boolean;
    isCompleted:boolean;
}

const todoSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    Title: {
        type: String,
        required: true,
        unique: true
    },
    Description: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
