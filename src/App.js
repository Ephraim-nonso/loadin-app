import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { Login } from "./components/login/Login";
import Navbar from "./components/nav/Navbar";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
