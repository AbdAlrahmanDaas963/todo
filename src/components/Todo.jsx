import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItemButton from "@mui/material/ListItemButton";
import TextField from "@mui/material/TextField";
import { Button, Tabs, Tab } from "@mui/material";

import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function Todo({ text, id }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(text);
  const saveTodo = () => {
    const payload = {
      id,
      text: editValue,
    };
    dispatch(updateTodo(payload));
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return isEdit ? (
    <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
        label="Edit"
        id="outlined-size-small"
        size="small"
        defaultValue={text}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <div>
        <Button
          onClick={() => cancelEdit()}
          size="small"
          variant="outlined"
          color="error"
        >
          cancel
        </Button>
        <Button
          onClick={() => saveTodo()}
          size="small"
          variant="contained"
          color="success"
        >
          save
        </Button>
      </div>
    </ListItemButton>
  ) : (
    <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
      <div>{text}</div>

      <div>
        <Button
          onClick={() => dispatch(deleteTodo(id))}
          size="small"
          variant="text"
          color="error"
        >
          delete
        </Button>
        <Button
          onClick={() => setIsEdit(!isEdit)}
          size="small"
          variant="text"
          color="info"
        >
          edit
        </Button>
      </div>
    </ListItemButton>
  );
}

export default Todo;
