import React from 'react'
import EmployeeForm from "./components/EmployeeForm";
import Data from "./components/Data";
import {Route, Switch} from "react-router-dom";


const App = () => {
  return (
    <>
        
        <Switch>
            <Route exact path="/" ><EmployeeForm /></Route>
            <Route exact path="/Data"><Data /></Route>
        </Switch>
  
            
    </>
  )
}

export default App
