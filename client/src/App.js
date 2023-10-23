
import "./App.css";
import HomePage from "./components/homePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
/*import HomePage from "./components/homePage"; */
import FavoriteList from "./components/FavList";
/*import FavoriteButton from "./components/favButton"; */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div className="App">
      <header>
      <Router>
      <MainNavbar/>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<search />} />
      </Routes>
      </Router>
      </header>

      <section>
        <div>
        <FavoriteList/>
        </div>
      </section>
    </div>
   );
}

export default App;
