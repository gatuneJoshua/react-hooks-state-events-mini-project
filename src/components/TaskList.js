import React from "react";
import Task from "./Task";


function TaskList() {
  function TaskList({tasks, onHandleDelete}) {
    const tasksEl = tasks.map((task) => (
      <Task onHandleDelete={onHandleDelete} key={task.text} category={task.category} text={task.text}/>
    ))
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
    
  );
}

export default TaskList;
