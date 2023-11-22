import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ScrollBar from "./components/scrollBar";


const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={themeDark}>
    <CssBaseline />
    
    <ScrollBar/>
  </ThemeProvider>
  );
}

export default App;
