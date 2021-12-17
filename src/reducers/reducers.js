import {combineReducers} from "redux";

const initialstate = {
    list:[]
}

const Reducers = (state = initialstate , action) => {
    
    switch(action.type){
        
       case "Register_User" :
            const {Name, Email ,Phone, Work, Salary,  Password , CPassword} = action.payload;

            if( Name|| Email ||Phone || Work || Salary ||  Password || CPassword === "") {
                alert("please fill the data carefully...");
                return state;
            }
            else{
               
                return {
                    list: state.list,state,
                }
                
            }   
            

        case "Edit_User" :
            return {
                list: state.list
            } 


        case "Delete_User" :
            return {
                list: state.list.filter(ele => ele.id !== action.payload.id)
            }

        case "Save_Update" :
            return {
                list: state.list.map(ele => ele.id === action.payload.id ? {...ele,item: action.payload.item, editing: false} : ele)
            }  


        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
