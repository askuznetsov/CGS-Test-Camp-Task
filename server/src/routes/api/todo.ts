import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";

import auth from "../../middleware/auth";
import Todo, { ITodo } from "../../models/Todo";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

//Example
router.post("/save", async (req: Request, res: Response) => {
    //var newTodo = new Todo({ Title: "test", Description: "test desc", Year: "2021", isPublic: true, isCompleted: false });
    try {
        const newTask = new Todo();
        newTask.Title = req.body.Title;
        newTask.Description = req.body.Decsription;
        newTask.Year = req.body.Year;
        newTask.isPublic = req.body.isPublic;
        newTask.isCompleted = req.body.isCompleted;

        newTask.save();
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});

router.get("/find", async (req: Request, res: Response) => {
    try {
        const tasks = await Todo.find({ req.body });

        if (!tasks)
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .json({ msg: "Profile not found" });

        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});

router.get("/findfirst", async (req: Request, res: Response) => {
    try {
        const tasks: ITodo = await Todo.findOne({
            user: req.body.userId,
        });

        if (!tasks)
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .json({ msg: "Profile not found" });

        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .json({ msg: "Profile not found" });
        }
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});

router.delete('/', async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete({ user: req.userId });

        res.json({ msg: "Task removed" });
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});

router.post('/update', async function (req, res) {
    try {
        await Todo.findByIdAndUpdate(req.body.id,
            req.body);

        res.json({ msg: "Task updated" });
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});

export default router;

// get all, create, update, delete
