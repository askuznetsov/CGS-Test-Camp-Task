import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Welcome from "./components/Welcome/Welcome";
import CreateNew from "./components/CreateNew/CreateNew";
import HomePage from "./components/HomePage/HomePage";
import SingleTask from "./components/SingleTask";
import EditTask from "./components/EditTask/EditTask";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            totalNumOfTasks: 0
        };
    }

    pushNewTask = info => {
        let id = this.state.totalNumOfTasks + 1;
        const newTasksList = this.state.tasks;
        newTasksList.push(
            <SingleTask
                info={info}
                id={id}
                deleteSingleTask={this.deleteTask}
            />
        );
        this.setState({
            tasks: newTasksList,
            totalNumOfTasks: id
        });
    };

    getTaskIndexById = id => {
        const taskList = this.state.tasks;
        for (let i = 0; i < taskList.length; i++) {
            const singleTask = taskList[i];
            if (Number(singleTask.props.id) === id) {
                return i;
            }
        }
    };

    deleteTask = id => {
        const taskIndex = this.getTaskIndexById(id);
        const newTasksList = this.state.tasks;
        newTasksList.splice(taskIndex, 1);
        this.setState({ tasks: newTasksList });
    };

    getTaskInfoById = id => {
        const index = this.getTaskIndexById(Number(id));
        return this.state.tasks[index].props.info;
    };

    updateTask = (info, id) => {
        const index = this.getTaskIndexById(Number(id));
        const newTasksList = this.state.tasks;
        newTasksList[index] = (
            <SingleTask
                info={info}
                id={id}
                deleteSingleTask={this.deleteTask}
            />
        );
        this.setState({ tasks: newTasksList });
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Welcome />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/createnew">
                        <CreateNew addTask={this.pushNewTask} />
                    </Route>
                    <Route path="/homepage">
                        <HomePage tasks={this.state.tasks} />
                    </Route>
                    <Route path="/singletask">
                        <SingleTask />
                    </Route>
                    <Route path="/edittask/:id">
                        <EditTask
                            editTask={this.updateTask}
                            taskInfo={this.getTaskInfoById}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default App;
