import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AllQuotes from "./Pages/AllQuotes/AllQuotes";
import { themeDark } from "./Style/themeDark";
import { themeLight } from "./Style/themeLight";
import { ThemeProvider } from "@mui/material";
import AddQuote from "./Pages/AddQuote/AddQuote";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import QuoteDetails from "./Pages/QuoteDetails/QuoteDetails";
import Edit from "./Pages/Edit/Edit";

function App() {
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={selectedTheme} >
        <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/add" element={<AddQuote/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/quote/:id" element={<QuoteDetails/>} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
