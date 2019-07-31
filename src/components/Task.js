import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };
  const { text, date, id, active, finishDate, important } = props.task;
  if (active) {
    return (
      <>
        <div>
          <p>
            <strong style={important ? style : null}>{text}</strong> -do{" "}
            <span>{date}</span>
            <button onClick={() => props.change(id)} className="btn">
              Zostało zrobione
            </button>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </div>
      </>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <>
        <div>
          <p>
            <strong>{text}</strong>{" "}
            <em>
              (zrobić do <span>{date}</span>)
            </em>
            <br />
            <span>- potwierdzenie wykonania {finish}</span>
            <button className="taskdone" onClick={() => props.delete(id)}>
              X
            </button>
          </p>
        </div>
      </>
    );
  }
};

export default Task;
