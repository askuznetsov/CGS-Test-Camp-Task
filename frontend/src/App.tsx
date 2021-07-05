import React from 'react';
import Todo from '../../server/src/routes/api/todo'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <form action="/" method="post">

            <h1>Create new Todo</h1>
            
            <label htmlFor="title" className="title">Title</label>
            <input name="form" type="text" id="title" required />

            <label htmlFor="description" className="description">Description</label>
            <textarea name="form" id="description" required></textarea>

            <label htmlFor="year" className="year">Year</label>
            <input name="form" type="number" id="year" required />

            <div className="checkbox_form">
              <label htmlFor="isPublic" className="isPublic">Public</label>
              <input name="form" type="checkbox" id="isPublic" required />
            </div>
            <div className="checkbox_form">
              <label htmlFor="isCompleted" className="isCompleted">Completed</label>
              <input name="form" type="checkbox" id="isCompleted" required />
            </div>

            <input name="form" type="submit" value="Create" />

          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
