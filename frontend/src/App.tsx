import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h1>Create new Todo</h1>
          <label htmlFor="title" id="title">Title</label>
          <input name="form" type="text" form="title" required/>
          <label htmlFor="description" id="description">Description</label>
          <input name="form" type="text" form="description" required/>
          <label htmlFor="year" id="year">Year</label>
          <input name="form" type="number" form="year" required/>
          <div className="checkbox_form">
            <label htmlFor="isPublic" id="isPublic">Public</label>
            <input name="form" type="checkbox" form="isPublic" required/>
          </div>
          <div className="checkbox_form">
            <label htmlFor="isCompleted" id="isCompleted">Completed</label>
            <input name="form" type="checkbox" form="isCompleted" required/>
          </div>
          <input name="form" type="submit" value="Create"/>
        </div>
      </header>
    </div>
  );
}

export default App;
