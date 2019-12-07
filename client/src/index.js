import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#d19a30", contrastText: "#000000" },
    secondary: { main: "#37474f", contrastText: "#ffffff" }
  }
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);