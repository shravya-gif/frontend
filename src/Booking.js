import React, { useState } from'react'
import validation from './BookValidation';

function Booking(){
    const [values,setValues]= useState({
        FirstName:'',
        LastName:'',
        PhoneNumber:'',
        Address:''
    })
    const [errors, setErrors] = useState({})
    const handleInput=(event)=>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
}
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            
           <div className='bg-white p-3 rounded w-25'>
            <h2 style={{color:'green'}}>Event Booking</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="FirstName"><strong>First Name</strong></label>
                    <input type="FirstName" placeholder='Enter the First name' name='Name' 
                    onChange={handleInput} className='form-control rounded-0' />
                    {errors.FirstName && <span className='text-danger'> {errors.FirstName} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="LastName"><strong>Last Name</strong></label>
                    <input type="LastName" placeholder='Enter the Last name' name='LastName' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.LastName && <span className='text-danger'> {errors.LastName} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="PhoneNumber"><strong>Phone Number</strong></label>
                    <input type="PhoneNumber" placeholder='Phone Number'  name='PhoneNumber' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.PhoneNumber && <span className='text-danger'> {errors.PhoneNumber} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Address"><strong>Address</strong></label>
                    <input type="Address" placeholder='Address'  name='Address' onChange={handleInput} className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Book</button>

            </form>
           </div>
   


        </div>
        )
}
export default Booking