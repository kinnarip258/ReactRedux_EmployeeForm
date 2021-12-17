import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, saveUpdate, deleteUser } from "../actions/action";
import { NavLink } from "react-router-dom";

const Data = () => {

    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);
    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Employee Data</h1>
                </div>
                <div className="dashboard_div">
                    <NavLink to= "/Register">Register New Employee</NavLink>
                </div>

                <div className="search_div">
                    <input onChange={e => setInputData(e.target.value)} placeholder="search Employee..."/>
                    <button>ADD</button>
                </div>

                <div className="show_data">

                    {
                        list.map(ele => {
                            return (
                                <div className = "eachitem" key = {ele.id}>

                                    <span>
                                        <h3>{ele.Name}</h3>

                                            {ele.editing ? null : 
                                                <button  onClick = {() => {dispatch(editUser(ele.editing = true))}}> Edit </button>}
                                                {ele.editing ? <button  onClick = {() => {
                                                    dispatch(saveUpdate(ele.id,ele.item))}}> save </button>
                                                : null}

                                                <button onClick = {() => {dispatch(deleteUser(ele.id))}} > Close </button>
                                                <button type="checkbox" onClick = {() => ele.checked = !ele.checked}>
                                                    {ele.checked ? "completed" : "active"}
                                                </button>
                                    </span>
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