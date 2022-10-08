import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: "8bc6b742-9855-46b2-8a1f-376f8e7c3718",
      text: "having lunch",
    },
    {
      id: "367acb06-9e2f-4c57-8001-653cc9b0a250",
      text: "playing footbal",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };
      // mutate the state
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.find((todo) => todo.id === id);
      todo.text = text;
    },
  },
});

// Dispatch
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
console.log("todoSlice: ", todoSlice);

// For configureStore
export default todoSlice.reducer;
