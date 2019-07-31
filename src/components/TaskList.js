import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      return b.finishDate - a.finishDate;
    });
  }
  //większe jest to co wcześniej występuje w alfabecie!!
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="tasks">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>"Brak zadań"</p>}
      </div>
      <div className="done">
        <h2>Zadanie zrobione ({doneTasks.length})</h2>
        {done.length > 5 && (
          <p className="lastfive">Wyświetlanych jest 5 ostatnich zadań</p>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
