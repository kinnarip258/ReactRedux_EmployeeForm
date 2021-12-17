import React from 'react'
import EmployeeForm from "./components/EmployeeForm";
import Login from './components/Login';
import Profile from './components/Profile';
import Data from "./components/Data";
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";


const App = () => {
  return (
    <>
        
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Login" ><Login /></Route>
            <Route exact path="/Register" ><EmployeeForm /></Route>
            <Route exact path="/Profile" ><Profile /></Route>
            <Route exact path="/Data"><Data /></Route>
        </Switch>
  
            
    </>
  )
}

export default App
