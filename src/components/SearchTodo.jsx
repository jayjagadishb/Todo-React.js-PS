import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodo } from "../features/todo/todoSlice";

function SearchTodo() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchTodo(e.target.value));
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Search Todos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchTodo;
