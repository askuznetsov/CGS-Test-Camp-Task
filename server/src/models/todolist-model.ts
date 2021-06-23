// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param title: string
 * @param isDone: boolean;
 */
 export interface ITodoList extends Document {
    title: string;
    isDone: boolean;
 }

const todoShema: Schema = new Schema(
  {
    title: { type: String, required: true },
    isDone: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const TodoList: Model<ITodoList> = model("TodoList", todoShema);

export default TodoList;

