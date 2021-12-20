import {combineReducers} from "redux";

const initialstate = {
    list:[]
}

const Reducers = (state = initialstate , action) => {
    
    switch(action.type){
        
       case "Register_User" :
            
                console.log("from reducers: ", action.payload)
                return{
                    list: [
                        ...state.list, action.payload
                    ]
                }
            
        case "Edit_User" :

            return {
                list: state.list.filter(ele => ele.id !== action.payload.id)
            } 


        case "Delete_User" :
            return {
                list: state.list.filter(ele => ele.id !== action.payload.id)
            }

        case "Save_Update" :

            const {id, Name, Email, Phone, Work, Salary, Password} = action.payload;
            return {
                list: state.list.map(ele => ele.id === id ? {...ele,Name: Name,
                    Email: Email,
                    Phone: Phone,
                    Work: Work,
                    Salary: Salary,
                    Password: Password,
                    editing: false} : ele)
            }  

        case "User_Search" :
            console.log("inputdata from reducers: ", action.payload.data);
            // const SearchName = action.payload.Emplist.find(ele => ele.Name === action.payload.data ? ele : "");
            // const SearchSalary = action.payload.Emplist.find(ele => ele.Salary === action.payload.data ? ele : "");
            // console.log("salary from reducers: ",SearchSalary);
            // console.log("name from reducers: ",SearchName);
            return {
                list: action.payload.Emplist.find(ele => ele.Name === action.payload.data ? {...ele, Name,
                    Email,
                    Phone,
                    Work,
                    Salary,
                    Password,
                    editing: false} : "")
            }  

        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
