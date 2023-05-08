import React, { useState } from "react";

function Booking() {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Address: "",
  });

  const [errors, setErrors] = useState({});

  function validation(newValues) {
    console.log("test", values, errors);

    let error = {};

    const PhoneNumber_pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    const Email_pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;

    if (newValues.FirstName === "") {
      error.FirstName = "Name should not be empty";
    } else {
      error.FirstName = "";
    }

    if (newValues.LastName === "") {
      error.LastName = "Last name should not be empty";
    } else {
      error.LastName = "";
    }

    if (newValues.PhoneNumber === "") {
      error.PhoneNumber = "Phone Number should not be empty";
    } else if (!PhoneNumber_pattern.test(newValues.PhoneNumber)) {
      error.PhoneNumber = "Enter the proper PhoneNumber";
    }
    if(newValues.Address===""){
      error.Address="All fields are mandatory";
    }

    if (!Email_pattern.test(newValues.Email)) {
      error.Email = "Enter the proper Email ID";
    } else {
      error.Email = "";
    }

    setErrors(error);
    setValues(newValues);
  }

  let handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    validation(values);
    fetch("http://localhost:3001/task1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  // const handleSubmit = (event) => {
  //   console.log(values);
  //   event.preventDefault();
  //   validation(values);
  // };
  

  const validateEmail = (email) => {
    validation({ ...values, Email: email });
  };

  const validateFname = (fname) => {
    validation({ ...values, FirstName: fname });
  };

  const validatelLname = (lname) => {
    validation({ ...values, LastName: lname });
  };
  const validatePh = (Ph) => {
    validation({ ...values, PhoneNumber: Ph });
  };
  const aAddress=(add)=>{
    validation({...values,Address:add});
  };
 

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 style={{ color: "green" }}>Event Booking</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="FirstName">
              <strong>First Name</strong>
            </label>
            <input
              type="FirstName"
              placeholder="Enter the First name"
              name="FirstName"
              onChange={(event) => {
                validateFname(event.target.value);
              }}
              className="form-control rounded-0"
            />
            <span className="text-danger"> {errors.FirstName} </span>
          </div>
          <div className="mb-3">
            <label htmlFor="LastName">
              <strong>Last Name</strong>
            </label>
            <input
              type="LastName"
              placeholder="Enter the Last name"
              name="LastName"
              onChange={(event) => {
                validatelLname(event.target.value);
              }}
              className="form-control rounded-0"
            />
            <span className="text-danger"> {errors.LastName} </span>
          </div>
          <div className="mb-3">
            <label htmlFor="PhoneNumber">
              <strong>Phone Number</strong>
            </label>
            <input
              type="PhoneNumber"
              placeholder="Phone Number"
              name="PhoneNumber"
              onChange={(event) => {
                validatePh(event.target.value);
              }}
              className="form-control rounded-0"
            />
            <span className="text-danger"> {errors.PhoneNumber} </span>
          </div>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email ID</strong>
            </label>
            <input
              type="Email"
              placeholder="Enter the Email ID"
              name="Email"
              onChange={(event) => {
                validateEmail(event.target.value);
              }}
              className="form-control rounded-0"
            />
            <span className="text-danger"> {errors.Email} </span>
          </div>
          <div className="mb-3">
            <label htmlFor="Address">
              <strong>Address</strong>
            </label>
            <input
              type="Address"
              placeholder="Address"
              name="Address"
              onChange={
                (event) => {
                  aAddress(event.target.value);
                }
                // Address(event.target.value);
              }
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
export default Booking;
