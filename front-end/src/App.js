//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";



//pages by React router
import Home from "./pages/home";
import User from "./pages/user";
import SignIn from "./pages/signIn";

//style css
import "./styles/index.css";

function App() {
  return (
    <div>
      <div className="App">
        <Router>         
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="sign"  element={<SignIn />} />
            <Route path="user"  element={<User />} />                    
          </Routes>           
        </Router>
      </div>
    </div>
  );
}

export default App;
