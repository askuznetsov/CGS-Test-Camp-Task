import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";

import auth from "../../middleware/auth";
import Todo, { ITodo } from "../../models/Todo";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

//Example
router.get("/save", async (req: Request, res: Response) => {
    //var newTodo = new Todo({ Title: "test", Description: "test desc", Year: "2021", isPublic: true, isCompleted: false });
    var newTask = new Todo();
    newTask.Title = req.body.Title;
    newTask.Description = req.body.Decsription;
    newTask.Year = req.body.Year;
    newTask.isPublic = req.body.isPublic;
    newTask.isCompleted = req.body.isCompleted;

    newTask.save(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get("/findall", async (req: Request, res: Response) => {
    await Todo.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.get("/findfirst", async (req: Request, res: Response) => {
    await Todo.findOne({ req },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

router.get('/delete', async (req: Request, res: Response) => {
    await Todo.deleteMany({ req },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

router.get('/deletefirst', async (req: Request, res: Response) => {
    await Todo.deleteOne({req},
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

router.post('/delete', async (req: Request, res: Response) => {
    await Todo.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});

router.post('/update', async function (req, res) {
    await Todo.findByIdAndUpdate(req.body.id,
        { req }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

export default router;

// get all, create, update, delete
