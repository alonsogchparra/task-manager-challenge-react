import React, { useEffect, useReducer, useState } from "react";
import "../node_modules/animate.css";
import { AddTask } from "./components/AddTask";
import { ListTasks } from "./components/ListTasks";
import "./components/sytles.css";
import { reducer } from "./store/reducer/reducer";
import { types } from "./store/types/types";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const App = () => {
  const [tasks, dispatch] = useReducer(reducer, [], init);
  const [showComplete, setShowComplete] = useState(false);

  const handleAddTask = (newTask) => {
    dispatch({
      type: types.add,
      payload: newTask,
    });
  };

  const handleToggleTask = (id) => {
    dispatch({
      type: types.toggle,
      payload: id,
    });
  };

  const handleDeleteTask = (id) => {
    console.log("App handleDeleteTask", id);
    dispatch({
      type: types.delete,
      payload: id,
    });
  };

  const handleEditTask = (id, newDesc) => {
    dispatch({
      type: types.update,
      payload: {
        id,
        desc: newDesc,
      },
    });
  };

  const handleSearchTask = (desc) => {
    dispatch({
      type: types.search,
      payload: desc,
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="container-fluid animate__animated animate__fadeIn">
        <h1>Task Manager (Tasks Quantity: {tasks.length})</h1>
        <h3>Tasks Done: {tasks.filter((task) => task.done).length}</h3>
        <hr />
        <div className="row mb-2">
          <div className="">
            <input
              type="checkbox"
              value={showComplete}
              name="showComplete"
              id="showComplete"
              className="me-1"
              onChange={() => setShowComplete(!showComplete)}
            />
            <label htmlFor="">Show Tasks Completed</label>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-5 mb-4">
            <AddTask handleAddTask={handleAddTask} />
          </div>
          <div className="col-12 col-md-7">
            <ListTasks
              tasks={tasks}
              handleToggleTask={handleToggleTask}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
              showComplete={showComplete}
              handleSearchTask={handleSearchTask}
            />
          </div>
        </div>
      </div>
    </>
  );
};
