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
    var newTodo = new Todo({ Title: "new task", Description: "some text", Year: "2021", isPublic: true, isCompleted: false });

    newTodo.save(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Data inserted");
        }
    });
},

    router.get("/findall", async (req: Request, res: Response) => {
        Todo.find(function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    }

    router.get("/findfirst", async (req: Request, res: Response) => {
        Todo.findOne({ Year: "2021" },
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
        Todo.remove({Year:"2021"}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.post('/delete', async (req: Request, res: Response) => {
        Todo.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    router.post('/update', function(req, res) {
        Todo.findByIdAndUpdate(req.body.id, 
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });

export default router;

// get all, create, update, delete
