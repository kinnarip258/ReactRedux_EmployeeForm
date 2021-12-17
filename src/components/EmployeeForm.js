import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from "../actions/action";
import "../form.css";

const EmployeeForm = (props) => {

    const [userData, setUserData] = useState({
        Name:"", Email :"",Phone:"", Work:"", Salary:"",  Password :"", CPassword:""
    });
    const dispatch = useDispatch();
    const userList = useSelector(state => state.Reducers.userList);
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]: value});
    }
    const saveUser = () => {
            
        const {Name, Email ,Phone, Work, Salary,  Password , CPassword} = userData;
        
        dispatch(registerUser(Name, Email ,Phone, Work, Salary,  Password , CPassword));    
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
                        <input required name="Name" value={userData.Name} onChange={handleInputs} id="Name" type='text' placeholder="Enter Full Name..." />
                        
                        <label>Email ID </label>
                        <input required name="Email" value={userData.Email} onChange={handleInputs} id="Email" type='text' placeholder="Enter Email ..." />

                        <label>Phone No. </label>
                        <input required name="Phone" value={userData.Phone} onChange={handleInputs} id="Phone" type='text' placeholder="Enter Phone ..." />

                        <label>Profession </label>
                        <input required name="Work" value={userData.Work} onChange={handleInputs} id="Work"  type='text' placeholder="Enter Work ..." />

                        <label>Salary </label>
                        <input required name="Salary" value={userData.Salary} onChange={handleInputs} id="Salary"  type='text' placeholder="Enter Salary ..." />

                        <label>Password </label>
                        <input required name="Password" value={userData.Password} onChange={handleInputs} id="Password"  type='password' placeholder="Enter Password ..." />

                        <label>Conform Password </label>
                        <input required name="CPassword" value={userData.CPassword} onChange={handleInputs} id="CPassword"  type='password' placeholder="Enter Conform Password ..." />

                        <button type="submit" onClick={saveUser}>Register</button>
                    </form>
                </div>

                <div className="loginsign_div">
                    <NavLink to="/Login">Already Have an Account</NavLink>
                </div>
            </div>
        </>
    )
}

export default EmployeeForm;
