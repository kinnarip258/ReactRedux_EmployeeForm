import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from "./actions/action";
import { useHistory } from "react-router-dom";
import "./form.css";

const EmployeeForm = (props) => {

    const [userData, setUserData] = useState({
        Name:"", Email :"",Phone:"", Work:"", Salary:"",  Password :"", CPassword:""
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
            
        const {Name, Email ,Phone, Work, Salary,  Password , CPassword} = userData;
        
        dispatch(registerUser(Name, Email ,Phone, Work, Salary,  Password , CPassword));    
    }

    // useEffect(() => {
    //     if(list){
    //         console.log("list: ", list)
    //         history.push('/Login', list);
    //     }
        
    // }, [list])

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
                        <input required name="Name" value={userData.Name} onChange={handleInputs} id="Name" type='text' placeholder="Enter Full Name..." />
                        
                        <label>Email ID </label>
                        <input required name="Email" value={userData.Email} onChange={handleInputs} id="Email" type='email' placeholder="Enter Email ..." />

                        <label>Phone No. </label>
                        <input required name="Phone" value={userData.Phone} onChange={handleInputs} id="Phone" type='number' placeholder="Enter Phone ..." />

                        <label>Profession </label>
                        <input required name="Work" value={userData.Work} onChange={handleInputs} id="Work"  type='text' placeholder="Enter Work ..." />

                        <label>Salary </label>
                        <input required name="Salary" value={userData.Salary} onChange={handleInputs} id="Salary"  type='number' placeholder="Enter Salary ..." />

                        <label>Password </label>
                        <input required name="Password" value={userData.Password} onChange={handleInputs} id="Password"  type='password' placeholder="Enter Password ..." />

                        <button type="submit" onClick={saveUser}>Register</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default EmployeeForm;
