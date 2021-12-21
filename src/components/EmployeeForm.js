import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import { registerUser} from "../actions/action";
import "../form.css";
import {useFormik} from 'formik';

const EmployeeForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email : "",
            Phone: "", 
            Work: "", 
            Salary: "",  
            Password: ""
        },
        onSubmit: (values) =>  {
            console.log("values of registerform: ", values)
            dispatch(registerUser(values), formik.handleReset(), history.push('/Deshboard'))}     
    });

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Employee Form</h1>
                </div>
                <div className="dashboard_div">
                    <NavLink to = "/Deshboard"> Dashboard </NavLink>
                </div>


                <div className="form_div">
                    <form className="register_form" id="register_form" onSubmit={formik.handleSubmit}>
                        <label>Full Name </label> 
                        <input required  name="Name" onChange= {formik.handleChange}  value= {formik.values.Name} type='text' placeholder="Enter Full Name..." />
                        
                        <label>Email ID </label>
                        <input required  name="Email" onChange= {formik.handleChange}  value= {formik.values.Email} type='Email' placeholder="Enter Email ..." />

                        <label>Phone No. </label>
                        <input required name="Phone" onChange= {formik.handleChange}  value= {formik.values.Phone} type='number' placeholder="Enter Phone ..." />

                        <label>Profession </label>
                        <input required  name="Work" onChange= {formik.handleChange}  value= {formik.values.Work} type='text' placeholder="Enter Work ..." />

                        <label>Salary </label>
                        <input required  name="Salary" onChange= {formik.handleChange}  value= {formik.values.Salary} type='tex' placeholder="Enter Salary ..." />

                        <label>Password </label>
                        <input required  name="Password" onChange= {formik.handleChange}  value= {formik.values.Password} type='Password' placeholder="Enter Password ..." />

                        <button type="submit">Register</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default EmployeeForm;

