import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser ,userSearch, allUsers} from "../actions/action";
import { NavLink} from "react-router-dom";

const Data = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);
    const [inputData, setInputData] = useState("");
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
                    <button onClick={() => {dispatch(userSearch(inputData), setInputData(""))}}>Search</button>
                </div>

                <div className="allEmployeeList_div">
                    <button onClick={() => {dispatch(allUsers())}}>Show All Employees</button>
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

                                <table style={{"width" : "100%"}}>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.Name}</td>
                                        <td>{ele.Email}</td>
                                        <td>{ele.Phone}</td>
                                        <td>{ele.Work}</td>
                                        <td>{ele.Salary}</td>
                                        <td>{ele.Password}</td>
                                    </tr>

                                        <NavLink to={`/:?id=${ele.id}`}><button> Edit </button></NavLink>
                                        <button onClick = {() => {dispatch(deleteUser(ele.id))}}> Delete </button>
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