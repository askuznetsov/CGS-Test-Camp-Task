import { Router, Response } from "express";
// import { check, validationResult } from "express-validator/check";
// import HttpStatusCodes from "http-status-codes";

// import auth from "../../middleware/auth";
import TodoList, { ITodoList } from "../../models/todolist-model";
import Request from "../../types/Request";

const router: Router = Router();

// @route   POST api/todolist/new
// @desc    create new TodoItem
// @access  Private
router.post("/new", async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a todoitem',
    });
  }

  const todoitem: ITodoList = new TodoList(body);

  if (!todoitem) {
    return res.status(400).json({ success: false, error: err });
  }

  todoitem
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: todoitem._id,
        message: 'TodoItem created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'TodoItem not created!',
      });
    });
});

router.put("/new/:id", async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  TodoList.findOne({ _id: req.params.id }, (err: any, todoitem: any) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'TodoItem not found!',
      });
    }
    todoitem.isDone = body.isDone;
    todoitem.title = body.title;
    todoitem
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: todoitem._id,
          message: 'TodoItem updated!',
        });
      })
      .catch((error: any) => {
        return res.status(404).json({
          error,
          message: 'TodoItem not updated!',
        });
      });
  });
})

router.delete("/new/:id", async (req: Request, res: Response) => {
  await TodoList.findOneAndDelete({ _id: req.params.id }, (err: any, todoitem: any) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!todoitem) {
      return res.status(200).json({ success: false, error: `TodoItem not found`, data: [] });
    }

    return res.status(200).json({ success: true, data: todoitem });
  }).catch((err) => console.log(err));
})

router.get("/new", async (req: Request, res: Response) => {
  await TodoList.find({}, (err: any, todoitem: any) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!todoitem.length) {
      return res.status(200).json({ success: false, error: `TodoItem not found`, data: [] });
    }
    return res.status(200).json({ success: true, data: todoitem });
  }).catch((err) => console.log(err));
})

router.get("/new/:id", async (req: Request, res: Response) => {
  await TodoList.findOne({ _id: req.params.id }, (err: any, todoitem: any) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!todoitem) {
      return res.status(404).json({ success: false, error: `TodoItem not found` });
    }
    return res.status(200).json({ success: true, data: todoitem });
  }).catch((err) => console.log(err));
})

router.post("/new/killall", async (req: Request, res: Response) => {
  const body = req.body.list;
  let myquery = { _id: { $in: body } };

  await TodoList.deleteMany(myquery, (err: any, todoitem: any) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!todoitem) {
      return res.status(404).json({ success: false, error: `TodoItem not found` });
    }

    return res.status(200).json({ success: true });
  }).catch((err) => console.log(err));
})

export default router;
