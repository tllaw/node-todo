import { KeyboardEvent, useState } from "react";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

type TodoItem = { title: String; finished: boolean };

function Todo() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const onTodoTextFieldKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      setTodoList([...todoList, { title: target.value, finished: false }]);
      target.value = "";
    }
  };

  const onTodoDone = (index: Number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="div" align="center">
        Todo List
      </Typography>
      <TextField variant="outlined" onKeyPress={onTodoTextFieldKeyPress} />
      {todoList.map((todo, i) => (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          key={i}
        >
          <Box>{todo.title}</Box>
          <IconButton onClick={() => onTodoDone(i)}>
            <DoneIcon />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  );
}

export default Todo;
