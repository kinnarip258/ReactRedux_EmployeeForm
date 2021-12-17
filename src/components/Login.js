import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUser } from "../actions/action";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();
    const list = useSelector(state => state.Reducers.list);
    const history = useHistory();

    // useEffect(() => {
    //     if(list){
    //         console.log("list: ", list);
    //         history.push('/Profile', list);
    //     }
        
    // }, [list])

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Login</h1>
                </div>
                <hr />


                <div className="form_div">
                    <form className="login_form" id="login_form">
                        <label>Username </label> 
                        <input required  name="email" value={Email} onChange={e => setEmail(e.target.value)} id="email" type='email' placeholder="Enter Email ID..."/>
                        
                        <label>Password </label>
                        <input required name="password" value={Password} onChange={e => setPassword(e.target.value)}  id="password" type='password' placeholder="Enter Password ..."/>
                        
                        <button type="submit" onClick={() => {dispatch(loginUser(Email,Password),
                        console.log("data: ",Email,Password ))}}>Log In</button>
                    </form>
                </div>

                <div className="registersign_div">
                    <NavLink to = "/Register">Create An Account</NavLink>
                </div>
            </div>
            

        </>
    )
}

export default Login;