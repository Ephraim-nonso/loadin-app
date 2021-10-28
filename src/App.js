import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {HomePage} from './view/components/homepage/HomePage';
import { Login } from "./view/components/login/Login";
import Register from "./view/components/register/Register";
import About from "./view/components/about/About";
import Faq from "./view/components/faq/faq";
import Contact from "./view/components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
