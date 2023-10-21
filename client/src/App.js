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
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<search />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
