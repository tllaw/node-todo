import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Todo from "./Todo";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          p: 2,
        }}
      >
        <Todo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
