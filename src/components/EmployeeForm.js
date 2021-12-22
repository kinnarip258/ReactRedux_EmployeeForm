import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { registerUser , saveUpdate} from "../actions/action";
import "../form.css";
import {useFormik} from 'formik';

const EmployeeForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const editlist = useSelector(state => state.Reducers.list);
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email : "",
            Phone: "", 
            Work: "", 
            Salary: "",  
            Password: ""
        },

        validate() {
            const error = {};

            if(formik.touched.Email && !formik.values.Email){
                error.email = "Required";
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.Email)){
                error.email = "Invalid email address";
            }
            if(formik.touched.Password && !formik.values.Password){
                error.Password = "Required";
            }
            if(formik.touched.Name && !formik.values.Name){
                error.Name = "Required";
            }
            if(formik.touched.Phone && !formik.values.Phone){
                error.Phone = "Required";
            }
            if(formik.touched.Work && !formik.values.Work){
                error.Work = "Required";
            }
            if(formik.touched.Salary && !formik.values.Salary){
                error.Salary = "Required";
            }
        },
        onSubmit: (values) =>  {

            dispatch(registerUser(values), formik.handleReset(), history.push('/Deshboard'))
        }     
    });

    // const editDataFunction = () => {
    //     formik.setFieldValues("Name", 'Kinnari' )
    // }

    // useEffect(() => {
    //     editlist.getById(id).then(user => {
    //         const fields = ['Name', 'Email', 'Phone', 'Work', 'Salary', 'Password'];
    //         fields.forEach(field => setFieldValue(field, user[field]));
    //         setUser(user);
    //     })
    // }, []);

    console.log("editlist from register page: ", editlist);

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
                    {/* {editlist.map(ele => {
                        return(
                            <form>
                                <h1>{ele.editing ? ele.id : null}</h1>
                            </form>
                        )
                    })} */}

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
                        {/* <button onClick={() => setFieldValue}>Update</button> */}
                    </form> 
                </div>

            </div>
        </>
    )
}

export default EmployeeForm;

