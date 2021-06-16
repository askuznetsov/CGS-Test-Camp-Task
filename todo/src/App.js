import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import CreateNew from "./components/CreateNew";
import HomePage from "./components/HomePage";
import SingleTask from "./components/SingleTask";
import EditTask from "./components/EditTask";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            totalNumOfTasks: 0
        };
    }

    pushNewTask = (info) => {
        let id = this.state.totalNumOfTasks + 1;
        const newTasksList = this.state.tasks;
        newTasksList.push(
            // <SingleTask
            //     title={title}
            //     description={description}
            //     year={year}
            //     public={privacy}
            //     completed={completed}
            //     deleteSingleTask={this.deleteTask}
            //     id={id}
            // />
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
        // console.warn('taskList', singleTask.props.id)
        for (let i = 0; i < taskList.length; i++) {
            const singleTask = taskList[i];
            console.warn('taskList', singleTask.props.id)
            if (singleTask.props.id === id) {
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

    getTaskInfoById = (id) => {
        const index = this.getTaskIndexById(Number(id));
        return this.state.tasks[index].props.info;
    }

    updateTask = (info, id) => {
        const index = this.getTaskIndexById(Number(id));
        const newTasksList = this.state.tasks;
        newTasksList[index] = <SingleTask info={info} id={id} deleteSingleTask={this.deleteTask}/>;
        this.setState({tasks: newTasksList})
    };

    render() {
        return (
            <Router>
                <div className="App"></div>

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
                            // taskInfo={this.state.tasks[getTaskById()].info}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default App;
