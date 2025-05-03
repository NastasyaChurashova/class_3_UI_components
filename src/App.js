import './App.css';
import TemperatureConverter from './components/temperatureConverter';
import TodoList from './components/todoList';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div>
      <TemperatureConverter />
      <TodoList />
      </div>
    </div>
  );
}

export default App;
