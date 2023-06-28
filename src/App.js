import React from "react";
import Booking from "./Booking";
import 'bootstrap/dist/css/bootstrap.min.css'
import Dash from "./Dash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserHistory,Router,Route} from 'react-router';
// import Sidebar from './Components/Sidebar'
// import Home from './Components/Home'

import 'bootstrap-icons/font/bootstrap-icons.json'
import 'react-bootstrap-icons'
function App() {
  return (
    <div>
      {/* <Booking /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Booking} />
          <Route path="/dashboard" Component={Dash} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}
export default App;
