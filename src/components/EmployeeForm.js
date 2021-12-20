import React, {useEffect, useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { registerUser, editUser, saveUpdate, deleteUser } from "../actions/action";
import "../form.css";

const EmployeeForm = () => {

    const [userData, setUserData] = useState({
        Name:"", Email :"",Phone:"", Work:"", Salary:"",  Password :""
    });
    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);
    const history = useHistory();

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]: value});
    }
    const saveUser = () => {
            
        const {Name, Email ,Phone, Work, Salary,  Password } = userData;
        
        dispatch(registerUser(Name, Email ,Phone, Work, Salary, Password ));
        history.push('/Data');
    }
    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Employee Form</h1>
                </div>
                <div className="dashboard_div">
                    <NavLink to = "/Data">Dashboard</NavLink>
                </div>


                <div className="form_div">
                    <form className="register_form" id="register_form">
                        <label>Full Name </label> 
                        <input required name="Name" value={userData.Name} onChange={handleInputs} id="Name" type='text' autoComplete={false} placeholder="Enter Full Name..." />
                        
                        <label>Email ID </label>
                        <input required name="Email" value={userData.Email} onChange={handleInputs} id="Email" type='email' autoComplete={false} placeholder="Enter Email ..." />

                        <label>Phone No. </label>
                        <input required name="Phone" value={userData.Phone} onChange={handleInputs} id="Phone" type='number' autoComplete={false} placeholder="Enter Phone ..." />

                        <label>Profession </label>
                        <input required name="Work" value={userData.Work} onChange={handleInputs} id="Work"  type='text' autoComplete={false} placeholder="Enter Work ..." />

                        <label>Salary </label>
                        <input required name="Salary" value={userData.Salary} onChange={handleInputs} id="Salary"  type='number' autoComplete={false} placeholder="Enter Salary ..." />

                        <label>Password </label>
                        <input required name="Password" value={userData.Password} onChange={handleInputs} id="Password"  type='password' autoComplete={false} placeholder="Enter Password ..." />

                        <button type="submit" onClick={saveUser}>Register</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default EmployeeForm;

