import React from 'react'
import EmployeeForm from "./components/EmployeeForm";
import Deshboard from "./components/Deshboard";
import {Route, Switch} from "react-router-dom";


const App = () => {
  return (
    <>
        
        <Switch>
            <Route exact path="/" ><EmployeeForm /></Route>
            <Route exact path="/Deshboard"><Deshboard /></Route>
        </Switch>
  
            
    </>
  )
}

export default App
