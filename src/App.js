import React from 'react'
import EmployeeForm from "./components/EmployeeForm";
import store from './store';
import {Provider} from "react-redux";

store.subscribe(() => console.log(store.getState()));

const App = () => {
  return (
    <>
      <Provider>
        <EmployeeForm/>
      </Provider>      
    </>
  )
}

export default App
