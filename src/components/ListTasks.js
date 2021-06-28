import React, { useState } from "react";
import { ListTaskItem } from "./ListTaskItem";

export const ListTasks = ({
  tasks,
  handleToggleTask,
  handleDeleteTask,
  handleEditTask,
  showComplete,
}) => {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) => {
    return task.desc.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h4>Search your Task</h4>
      <hr />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search your task"
        autoComplete="off"
        value={search}
        name="description"
        onChange={(e) => setSearch(e.target.value)}
      />

      {showComplete && (
        <ul className="list-group list-group-flush">
          {filteredTasks.length > 0 ? (
            filteredTasks
              .filter((task) => task.done)
              .map((task, i) => (
                <ListTaskItem
                  key={task.id}
                  task={task}
                  i={i}
                  handleToggleTask={handleToggleTask}
                  handleDeleteTask={handleDeleteTask}
                  handleEditTask={handleEditTask}
                />
              ))
          ) : (
            <div class="alert alert-danger" role="alert">
              Task was not found
            </div>
          )}
        </ul>
      )}

      {!showComplete && (
        <ul className="list-group list-group-flush">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, i) => (
              <ListTaskItem
                key={task.id}
                task={task}
                i={i}
                handleToggleTask={handleToggleTask}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            ))
          ) : (
            <div class="alert alert-danger" role="alert">
              Task was not found
            </div>
          )}
        </ul>
      )}
    </>
  );
};
