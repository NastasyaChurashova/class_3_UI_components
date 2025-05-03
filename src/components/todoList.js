import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, inputTask]);
      setInputTask(""); 
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>ToDo List</h2>
      <TextField
        label="Add your task"
        variant="standard"
        fullWidth
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddTask}
        style={{ marginTop: "10px" }}
      >
        ADD
      </Button>

      <List>
        {tasks.map((task, index) => (
          <Paper key={index} style={{ marginTop: "10px" }}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
