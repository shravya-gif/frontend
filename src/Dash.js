import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import {ArrowRight} from 'react-bootstrap-icons';
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";
//  import { MDBCol, MDBIcon } from "mdbreact";
// import { i } from 'react-bootstrap-icons'
// import 'react-bootstrap-icons/dist/bootstrap-icons'
// import * as i from 'react-bootstrap-icons'



function Dash() {
    let navigate = useNavigate();
  const [toggle, setToggle] = useState(true)
  const Toggle = () =>{
    setToggle(!toggle)
  }
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <i/>
      {/* <ArrowRight/> */}
      <div className='row'>
        {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
      <Sidebar/>
      </div>}
      {toggle && <div className='col-4 col-md-2'></div>}
      <div className='col'>
        <Home Toggle={Toggle}/>
        </div>
      </div>
    </div>
    
  )
}

export default Dash


// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <form className="form-inline mt-4 mb-4">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </form>
//     </MDBCol>
//   );
// }