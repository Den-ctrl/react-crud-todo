import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function Inputs() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(true);

  function addItem() {
    if (editingIndex === true) {
      setItems([...items, inputValue]);
    } else {
      items[editingIndex] = inputValue;
      setEditingIndex(true);
    }

    setInputValue("");
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function editItem(index) {
    setInputValue(items[index]);
    setEditingIndex(index);
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <>
      <TextField
        label="Add Todo"
        size="small"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={addItem}>
        {editingIndex === true ? "Create" : "Update"}
      </Button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <Button onClick={() => editItem(index)} color="secondary">
              Edit
            </Button>
            <Button onClick={() => deleteItem(index)} color="error">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inputs;
