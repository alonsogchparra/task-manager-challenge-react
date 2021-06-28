import React from "react";
import { useForm } from "../hooks/useForm";

export const AddTask = ({ handleAddTask }) => {
  const {
    value: { description },
    handleInputChange,
    reset,
  } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTask(newTask);

    reset();
  };

  return (
    <>
      <h4>Add Task</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add your new task..."
          autoComplete="off"
          value={description}
          name="description"
          onChange={handleInputChange}
        />
        <button
          className="form-control btn btn-outline-primary mt-1"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
};
