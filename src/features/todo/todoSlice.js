import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  searchResults: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      state.searchResults = state.todos;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.searchResults = state.todos;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
      state.searchResults = state.todos;
    },
    searchTodo: (state, action) => {
      state.searchResults = state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      state.searchResults = state.todos;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, searchTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
