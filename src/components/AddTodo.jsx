/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/Todo/todoSlice";

function AddTodo({ input, onInputChange, editingTodoId, setEditingTodoId }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodoId) {
      dispatch(updateTodo({ id: editingTodoId, text: input }));
      setEditingTodoId(null);
    } else {
      dispatch(addTodo(input));
    }
    onInputChange({ target: { value: "" } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-3  flex">
      <input
        type="text"
        className="bg-gray-800 rounded border w-5/6 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className=" w-1/6 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodoId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
