import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 0;
  state = {
    tasks: []
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, isChecked) => {
    if (text === "") return alert("Musisz dodać jakieś zadanie!");
    if (date === "") return alert("Musisz wybrać date!");
    const task = {
      id: this.counter,
      text: text, 
      date: date, 
      important: isChecked, 
      active: true,
      finishDate: null
    };
    let tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({
      tasks
    });
    this.counter++;
    return true;
  };

  render() {
    return (
      <>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default App;
