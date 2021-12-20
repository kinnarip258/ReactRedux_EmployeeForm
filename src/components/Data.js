import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, saveUpdate, deleteUser ,userSearch} from "../actions/action";
import { NavLink } from "react-router-dom";

const Data = () => {

    const [inputData, setInputData] = useState("");
    const [editedData, setEditedData] = useState({
        Name:"", Email :"",Phone:"", Work:"", Salary:"",  Password :""
    })
    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setEditedData({...editedData, [name]: value});
    }

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Employee Data</h1>
                </div>
                <div className="dashboard_div">
                    <NavLink to= "/">Register New Employee</NavLink>
                </div>

                <div className="search_div">
                    <input onChange={e => setInputData(e.target.value)} value={inputData} placeholder="search Employee..."/>
                    <button onClick={() => {dispatch(userSearch(inputData,list), setInputData(""))}}>Search</button>
                </div>

                <hr />
                <div className="data_index">
                    <table style={{"width" : "100%"}}>
                        <tr>
                            <th>Employee_id</th>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Phone</th>
                            <th>Profession</th>
                            <th>Salary</th>
                            <th>Password</th>
                        </tr>
                    </table>

                </div>

                <div className="show_data">

                    {
                    
                        list.map(ele => {
                            return (
                                <div className = "eachitem" key = {ele.id}>

                                { ele.editing ? 
            
                                    <form>

                                        <input name="Name" type="text" placeholder = "Enter Name" value={editedData.Name} onChange = {handleInputs}  />
                                        <input name="Email" type="email" placeholder = "Enter Email " value={editedData.Email} onChange = {handleInputs}  />
                                        <input name="Phone" type="number" placeholder = "Enter Phone " value={editedData.Phone} onChange = {handleInputs}  />
                                        <input name="Work" type="text" placeholder = "Enter Profession  " value={editedData.Work} onChange = {handleInputs}  />
                                        <input name="Salary" type="number" placeholder = "Enter Salary " value={editedData.Salary} onChange = {handleInputs}  />
                                        <input name="Password" type="text" placeholder = "Enter Password" value={editedData.Password} onChange = {handleInputs}  />
                                    </form> : null
                                }   

                                <table style={{"width" : "100%"}}>
                                        <tr>
                                            <td> {ele.id}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing? editedData.Name :ele.Name}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing ? editedData.Email :ele.Email}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing ? editedData.Phone :ele.Phone}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing ? editedData.Work :ele.Work}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing ? editedData.Salary :ele.Salary}</td>
                                            <td onClick = {() => {dispatch(editUser(ele.editing = true, setEditedData))}}>{ele.editing ? editedData.Password :ele.Password}</td>
                                        </tr>

                                        {ele.editing ? <button  onClick = {() => {
                                            dispatch(saveUpdate(ele.id, ele.Name = editedData.Name, ele.Email = editedData.Email,
                                            ele.Phone = editedData.Phone, ele.Work = editedData.Work,
                                             ele.Salary = editedData.Salary, ele.Password = editedData.Password))}}> save </button> 
                                            : <button  onClick = {() => {dispatch(editUser(ele.editing = true))}}> Edit </button>}
                                        <button onClick = {() => {dispatch(deleteUser(ele.id))}} > Delete </button>
                                </table> 
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Data;