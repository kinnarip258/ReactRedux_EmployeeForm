import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, saveUpdate, deleteUser ,userSearch, allUsers} from "../actions/action";
import { NavLink, useHistory } from "react-router-dom";

const Data = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);
    const history = useHistory();
    const [inputData, setInputData] = useState("");
    const [editedData, setEditedData] = useState({
        Name:"", Email :"",Phone:"", Work:"", Salary:"",  Password :""
    })


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

                                { ele.editing ? 
                                
                                    <form className="edited_form" onSubmit={() => dispatch(saveUpdate(ele.id, editedData))}>
                                        <input name="Name" type="text" placeholder = "Enter Name" onChange= {handleInputs} value={editedData.Name} />
                                        <input name="Email" type="email" placeholder = "Enter Email" onChange= {handleInputs} value={editedData.Email} />
                                        <input name="Phone" type="number" placeholder = "Enter Phone" onChange= {handleInputs} value={editedData.Phone} />
                                        <input name="Work" type="text" placeholder = "Enter Profession" onChange= {handleInputs} value={editedData.Work} />
                                        <input name="Salary" type="number" placeholder = "Enter Salary" onChange= {handleInputs} value={editedData.Salary} />
                                        <input name="Password" type="text" placeholder = "Enter Password" onChange= {handleInputs} value={editedData.Password} />
                                        <button type="submit"> save </button>
                                    </form> : null
                                }   

                    <table style={{"width" : "100%"}}>
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.editing ? editedData.Name : ele.data.Name}</td>
                            <td>{ele.editing ? editedData.Email : ele.data.Email}</td>
                            <td>{ele.editing ? editedData.Phone : ele.data.Phone}</td>
                            <td>{ele.editing ? editedData.Work : ele.data.Work}</td>
                            <td>{ele.editing ? editedData.Salary : ele.data.Salary}</td>
                            <td>{ele.editing ? editedData.Password : ele.data.Password}</td>
                        </tr>

                            <button  onClick = {() => {dispatch(editUser(ele.editing = true))}}> Edit </button>
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