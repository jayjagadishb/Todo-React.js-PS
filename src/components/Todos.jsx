import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleUpdate = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const submitUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditingId(null);
    setNewText("");
  };

  const todosToDisplay = searchResults.length > 0 ? searchResults : todos;

  return (
    <>
      <ul className="list-none">
        {todosToDisplay.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              todo.completed ? "bg-green-500" : "bg-zinc-800"
            }`}
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button
                  onClick={() => submitUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div
                  className={`text-white ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => dispatch(toggleComplete(todo.id))}
                    className={`text-white ${
                      todo.completed
                        ? "bg-yellow-500 hover:bg-yellow-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    } border-0 py-1 px-4 focus:outline-none rounded text-md`}
                  >
                    {todo.completed ? "Mark as Pending" : "Mark as Completed"}
                  </button>
                  <button
                    onClick={() => handleUpdate(todo.id, todo.text)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
