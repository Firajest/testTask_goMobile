/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import NewTaskForm from './components/newTaskForm';
import Tasks from './components/Tasks';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="intro"><h4>Add new task</h4></div>
      <header className="App-header">
        <NewTaskForm />
      </header>
      <SearchBar />
      <br />
      <div>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
