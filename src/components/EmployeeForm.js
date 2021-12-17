import React, {useState} from "react";
import "../form.css";

const EmployeeForm = () => {

    const [userData, setUserData] = useState({
        Name:"", Email :"",Phone: "", Work: "", Salary: "", Password :"",CPassword:"",
    });

    const handleSubmit = () => {
    }

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Employee Form</h1>
                </div>


                <div className="form_div">
                    <form className="register_form" id="register_form">
                        <label>Full Name </label> 
                        <input required name="Name" id="Name" type='text' placeholder="Enter Full Name..." />
                        
                        <label>Email ID </label>
                        <input required name="Email" id="Email" type='text' placeholder="Enter Email ..." />

                        <label>Phone No. </label>
                        <input required name="Phone" id="Phone" type='text' placeholder="Enter Phone ..." />

                        <label>Profession </label>
                        <input required name="Work" id="Work"  type='text' placeholder="Enter Work ..." />

                        <label>Salary </label>
                        <input required name="Salary" id="Salary"  type='text' placeholder="Enter Salary ..." />

                        <label>Password </label>
                        <input required name="Password" id="Password"  type='password' placeholder="Enter Password ..." />

                        <label>Conform Password </label>
                        <input required name="CPassword" id="CPassword"  type='password' placeholder="Enter Conform Password ..." />

                        <button type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmployeeForm;
