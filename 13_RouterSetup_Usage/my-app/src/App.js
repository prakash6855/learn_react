import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";
import Alert from "./components/Alert";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

function App() {
  const [Mode, setMode] = useState("light"); //To check whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home showAlert={showAlert} Mode={Mode} />,
    },
    {
      path: "/home",
      element: <Home showAlert={showAlert} Mode={Mode} />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";

      // setInterval(() => {
      //   document.title = 'Text utils is amazing';
      // }, 2500);
      // setInterval(() => {
      //   document.title = 'Install Text utils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Our Community"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <RouterProvider router={router} />
      <Alert alert={alert} />
    </>
  );
}

export default App;
