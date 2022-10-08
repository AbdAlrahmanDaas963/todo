import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Tabs, Tab } from "@mui/material";
import List from "@mui/material/List";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemButton from "@mui/material/ListItemButton";

import { addTodo, deleteTodo } from "../features/todo/todoSlice";
import Todo from "./Todo";

export default function Ready() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    //
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="my-list" style={{ maxWidth: "660px", margin: "auto" }}>
      <Tabs value={0} centered>
        <Tab
          label="My Todo List"
          sx={{ color: "royalblue", fontSize: "20px" }}
        />
      </Tabs>

      <form style={{ display: "flex", justifyContent: "center" }}>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-filled">Todo</InputLabel>
          <FilledInput
            id="component-filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ width: "300px" }}
          />
        </FormControl>

        <Button
          variant="contained"
          onClick={(e) => {
            addTodoHandler(e);
          }}
          sx={{ height: "55px" }}
          disabled={text === ""}
        >
          Add
        </Button>
      </form>
      <List component="nav">
        {todos.length === 0 ? (
          <ListItemButton sx={{ opacity: "0.7" }}>
            Add your first todo
          </ListItemButton>
        ) : (
          todos.map((todo) => (
            <Todo key={todo.id} text={todo.text} id={todo.id} />
          ))
        )}
      </List>
    </div>
  );
}

// enough with the ui, now redux
