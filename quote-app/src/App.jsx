import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AllQuotes from "./Pages/AllQuotes/AllQuotes";
import Nav from "./Pages/Nav/Nav";
import { themeDark } from "./Style/themeDark";
import { themeLight } from "./Style/themeLight";
import { ThemeProvider, useTheme } from "@mui/material";
import AddQuote from "./Pages/AddQuote/AddQuote";

function App() {
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={selectedTheme} >
      <div className="main" >
        {/* <Nav /> */}
        <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/add" element={<AddQuote/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
