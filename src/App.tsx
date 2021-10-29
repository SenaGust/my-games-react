import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter />
    </div>
  );
}

export default App;
