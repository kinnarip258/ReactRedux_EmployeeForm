import React from "react";
import {NavLink , useHistory} from "react-router-dom"
const Login = () => {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {

    }

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Login</h1>
                </div>
                <hr />
                <div className="form_div">
                    <form method="POST">
                        <label>Username </label> 
                        <input type='text' name="email" id="email"
                         onClick={(e) => {setEmail(e.target.value)}} placeholder="Enter Email ID..." />
                        
                        <label>Password </label>
                        <input type='password' name="password" id="password"
                         onClick={(e) => {setPassword(e.target.value)}} placeholder="Enter Password ..." />
                        
                        <button type="submit" onClick = {loginUser}>Log In</button>
                    </form>
                </div>
                
            </div>
            <div className="sign_div">
                <NavLink to = "/Registration">Create An Account</NavLink>
            </div>
        </>
    )
}

export default Login;