import React, { useState } from "react";

export const ListTaskItem = ({
  task,
  i,
  handleToggleTask,
  handleDeleteTask,
  handleEditTask,
}) => {
  const [btnEditPressed, setBtnEditPressed] = useState(false);
  const [newDesc, setNewDesc] = useState(task.desc);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleEditTask(task.id, newDesc);
    setBtnEditPressed(!btnEditPressed);
  };

  const handleCancelEdit = () => {
    setBtnEditPressed(!btnEditPressed);
    setNewDesc(task.desc);
  };

  return (
    <>
      {!btnEditPressed && (
        <li key={task.id} className="list-group-item animate__animated animate__fadeIn">
          <p
            className={`py-4 ${task?.done && "complete"}`}
            onClick={() => handleToggleTask(task.id)}
          >
            {i + 1}. {task.desc}
          </p>
          <div className="pb-2">
            <button
              className="btn btn-primary me-2"
              onClick={() => setBtnEditPressed(!btnEditPressed)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      )}

      {btnEditPressed && (
        <form onSubmit={handleEditSubmit} className="animate__animated animate__fadeIn">
          <input
            type="text"
            className="form-control"
            value={newDesc}
            name="description"
            autoComplete="off"
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button className="btn btn-primary form-control my-2" type="submit">
            Edit
          </button>
          <button
            className="btn btn-danger form-control"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};
