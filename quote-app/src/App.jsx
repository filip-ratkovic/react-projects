import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AllQuotes from "./Pages/AllQuotes/AllQuotes";
import Nav from "./Pages/Nav/Nav";
import { themeDark } from "./Style/themeDark";
import { themeLight } from "./Style/themeLight";
import { ThemeProvider } from "@emotion/react";

function App() {
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          {/* <Route to={"/signup"} element={<AllQuotes/>}/>
        <Route to={"/login"} element={<AllQuotes/>}/> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
