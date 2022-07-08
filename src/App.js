// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState("light");

  const [alert, setAlert] = React.useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03184e";
      showAlert("Dark Mode is Applied Succesfully Applied!!", "success");
      // document.body.style.color = "white"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black"
      showAlert("Light Mode is Applied Succesfully Applied!!", "alert");
    }
    // setMode(prev => !prev)
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUTils"
          about="About US"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar about='This is ABout Us' /> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Try - TextUtils - Word Counter, Character Counter"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>

          {/* <About /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
