import "./App.css";
import HomePage from "./components/homePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return ( 
    <div className="App">
      <Router>
      <MainNavbar/>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<search />} />
      </Routes>
      </Router>
    </div>
   );
}

export default App;
