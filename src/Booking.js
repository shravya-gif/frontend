import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
// import "./Booking.css";
function Booking() {
  let navigate = useNavigate();

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 style={{ color: "green" }}>Event Booking</h2>
        <Formik
          initialValues={{
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Email: "",
            Address: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.FirstName) {
              errors.FirstName = "Enter the first name";
            }
            if (!values.LastName) {
              errors.LastName = "Enter the Last name";
            }
            if (!values.PhoneNumber) {
              errors.PhoneNumber = "Enter the Phone Number";
            } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/i.test(values.PhoneNumber)) {
              errors.PhoneNumber = "Enter the proper Phone Number";
            }
            if (!values.Email) {
              errors.Email = "Enter the Email id";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = "Invalid email Id";
            }
            if (!values.Address) {
              errors.Address = "Enter the Address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("http://localhost:3001/task1", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((res) => {
                if (res.ok) {
                  navigate(`/dashboard`);
                  setTimeout(() => {
                    alert("form submited successfully");
                    setSubmitting(false);
                  }, 400);
                  // navigate(`/dashboard`);
                } else {
                  //Handle Error
                }
              })
              .catch((error) => {
                //Handle Error
                console.log(error);
              });
           
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="FirstName">
                  <strong>First Name</strong>
                </label>
                <input
                  type="FirstName"
                  name="FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.FirstName}
                  className="form-control rounded-0"
                />
                {errors.FirstName && touched.FirstName}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.FirstName}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="LastName">
                  <strong>Last Name</strong>
                </label>
                <input
                  type="LastName"
                  name="LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LastName}
                  className="form-control rounded-0"
                />
                {errors.LastName && touched.LastName}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.LastName}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="PhoneNumber">
                  <strong>Phone Number</strong>
                </label>
                <input
                  type="PhoneNumber"
                  name="PhoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhoneNumber}
                  className="form-control rounded-0"
                />
                {errors.PhoneNumber && touched.PhoneNumber}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.PhoneNumber}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="Email">
                  <strong>Email ID</strong>
                </label>
                <input
                  type="Email"
                  name="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Email}
                  className="form-control rounded-0"
                />
                {errors.Email && touched.Email}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {errors.Email}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="Address">
                  <strong>Address</strong>
                </label>
                <input
                  type="Address"
                  name="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Address}
                  className="form-control rounded-0"
                />
                {errors.Address && touched.Address}
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  {errors.Address}{" "}
                </span>
              </div>

              <button type="submit" disabled={isSubmitting}>
                submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Booking;
