import React from "react";
import Nav from "./Nav";
// import App from '../App'
import "react-bootstrap-icons";
// import { Cart } from 'react-bootstrap-icons'
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { MDBCol, MDBIcon } from "mdbreact";
// import { Toggle } from 'react-bootstrap-icons';

//import { Bag } from 'react-bootstrap-icons'
import { useState, useEffect } from "react";
import { Button } from "bootstrap";

function Home({ Toggle }) {
  const [users, setUsers] = useState([]);

  // function handleDelete(){
  //   const newList=lists.filter(li=>li.index!==index)
  //   StyleSheetList(newList)
  // }

  const fetchUserData = () => {
    var x = fetch("http://localhost:3001/task1");
    x.then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      setUsers(data);
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  

  // function removed(Email){
  //   fetch("http://localhost:3001/task1" + "/" + Email, {
  //     method: 'DELETE'
  //   }).then(() => {
  //      console.log('removed');
  //   }).catch(err => {
  //     console.error(err)
  //   });

  return (
    <div className="px-2">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        {/* <div> */}
        <MDBCol md="6">
          <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </MDBCol>
        {/* </div> */}
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Wedding</p>
              </div>
              <BsFillEnvelopeHeartFill className="bi bi-cart-plus p-1 fs-1"></BsFillEnvelopeHeartFill>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Birthday</p>
              </div>
              <FaBirthdayCake className="p-1 fs-1"></FaBirthdayCake>
              {/* <i class="bi bi-arrow-up-right-square"></i> */}
              {/* <i className='bi bi-cart-plus p-3 fs-1'></i>  */}
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Anniversary</p>
              </div>
              <GiGlassCelebration className="p-0 fs-1"></GiGlassCelebration>
              {/* <Love className="bi bi-cart-plus p-3 fs-1"></Love>  */}
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">0</h3>
                <p className="fs-5">Sports</p>
              </div>
              <MdSportsCricket className="p-0 fs-1"></MdSportsCricket>
              {/* <i class="bi bi-arrow-down-circle-fill"></i>  */}
            </div>
          </div>
        </div>
      </div>
      <table class=" container table caption-top bg-white rounded mt-2 ">
        <caption className="text-white fs-4">Registered Users</caption>
        <thead></thead>
        <table>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
          {users.map((listValue, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{listValue.FirstName}</td>
                <td>{listValue.LastName}</td>
                <td>{listValue.PhoneNumber}</td>
                <td>{listValue.Email}</td>
                <td>{listValue.Address}</td>
                {/* <td>
                  <Button className="delete" type="button">
                    Button
                  </Button>
                </td> */}
              </tr>
            );
          })}
        </table>
      </table>
    </div>
  );
}

export default Home;
