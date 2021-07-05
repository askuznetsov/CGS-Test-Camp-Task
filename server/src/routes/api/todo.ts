import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";

import auth from "../../middleware/auth";
import Todo, { ITodo } from "../../models/Todo";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

//save todo task
router.post("/", async (req, res) => {

    const newTask = new Todo();
    newTask.Title = req.body.title;
    newTask.Description = req.body.decsription;
    newTask.Year = req.body.year;
    newTask.isPublic = req.body.isPublic;
    newTask.isCompleted = req.body.isCompleted;

    try {
        await newTask.save();
        res.status(201).send(newTask);
    } catch (err) {
        res.status(400).send(err);
    }
});

//find all tasks
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Todo.find({});

        res.send(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const tasks = await Todo.findById(_id);

        if (!tasks) return res.sendStatus(404);
        return res.send(tasks);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const tasks = await Todo.findByIdAndDelete(_id);

        if (!tasks) return res.sendStatus(404);
        return res.send(tasks);
    } catch (err) {
        return res.sendStatus(400);
    }
});
/* still have error at 76

router.patch('/tasks/:id', async function (req, res) {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['Title', 'Desctiption', 'Year', 'isPublic', 'isComplete'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

    try {
        const tasks = await Todo.findById(_id);
        updates.forEach((update) => (tasks[update] = req.body[update]));
        await tasks.save();
        if (!tasks) return res.sendStatus(404);
        return res.send(tasks);
    } catch (err) {
        return res.status(400).send(err);
    }
});

*/

export default router;

// get all, create, update, delete
