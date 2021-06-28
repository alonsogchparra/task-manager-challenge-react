import { types } from "../types/types";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];

    case types.toggle:
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );

    case types.delete:
      return state.filter((task) => task.id !== action.payload);

    case types.update:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, desc: action.payload.desc }
          : task
      );

    case types.search:
      return state.filter((task) => task.desc === action.payload);


    default:
      return state;
  }
};
