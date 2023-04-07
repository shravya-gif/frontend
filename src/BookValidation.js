function validation(values){
    alert("")
    let error={}
    const PhoneNumber_pattern=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    

    if(values.FirstName===""){
        error.FirstName="Name should not be empty"
    }
    else {
        error.FirstName=""
    }
    if(values.LastName===""){
        error.LastName="Last name should not be empty"
    }
    else{
        error.LastName=""
    }
    if(values.PhoneNumber===""){
        error.PhoneNumber="Phone Number should not be empty"
    }else if(!PhoneNumber_pattern.test(values.PhoneNumber)){
        error.PhoneNumber="Enter the proper PhoneNumber"
    }
    return error;
}
export default validation;