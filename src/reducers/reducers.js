import {combineReducers} from "redux";

const initialState = {
    userList: []
}

const Reducers = (state = initialState , action) => {
    switch(action.type){
        
       case "Register_User" :
            const {Name, Email ,Phone, Work, Salary,  Password , CPassword} = action.payload
            if( Name|| Email ||Phone|| Work|| Salary||  Password || CPassword === "") {
                alert("please fill the data carefully...");
                return state;
            }
            else{

                console.log("userlist: ", state.userList)
                return {
                    state
                }
            }   
            
        case "Login_User":

            if(action.payload.Email || action.payload.Password === "") {
                alert("please fill the data carefully..");
            }
            else{
                return state
            }

        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
