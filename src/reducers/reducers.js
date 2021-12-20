import {combineReducers} from "redux";

const initialstate = {
    list:[],
    searchlist: []
}

const Reducers = (state = initialstate , action) => {
    
    switch(action.type){
        
       case "Register_User" :
            
                console.log("from reducers: ", action.payload)
                return{
                    ...state,
                    list: [
                        ...state.list, action.payload
                    ],
                    searchlist: [
                        ...state.searchlist, action.payload
                    ]
                }
            
        case "Edit_User" :

            return {
                ...state,
                list: state.list.filter(ele => ele.id !== action.payload.id),
                searchlist: state.searchlist.filter(ele => ele.id !== action.payload.id)
            } 


        case "Delete_User" :
            return {
                ...state,
                list: state.list.filter(ele => ele.id !== action.payload.id),
                searchlist: state.searchlist.filter(ele => ele.id !== action.payload.id)
            }

        case "Save_Update" :

            const {id, Name, Email, Phone, Work, Salary, Password} = action.payload;
            return {
                ...state,
                list: state.list.map(ele => ele.id === id ? {...ele,Name: Name,
                    Email: Email,
                    Phone: Phone,
                    Work: Work,
                    Salary: Salary,
                    Password: Password,
                    editing: false} : ele),
                searchlist: state.searchlist.map(ele => ele.id === id ? {...ele,Name: Name,
                    Email: Email,
                    Phone: Phone,
                    Work: Work,
                    Salary: Salary,
                    Password: Password,
                    editing: false} : ele)

            }  

        case "User_Search" :
            console.log("inputdata from reducers: ", action.payload.data);
            console.log("list: ", state.list);
            console.log("searchlist: ", state.searchlist);
            return {
                ...state,
                list: state.searchlist.filter(ele => ele.Name === action.payload.data || ele.Salary === action.payload.data)
            }  

        case "All_Users" :
            return {
                ...state,
                list: state.searchlist
            }

        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
