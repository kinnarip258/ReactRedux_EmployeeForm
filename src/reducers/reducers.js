
const initialstate = {
    editedObject:{
        Name:"", Email:"", Phone:"", Work:"", Salary:"", Password:""
    },
    list:[],
    templist: []
}

const Reducers = (state = initialstate , action) => {
    
    switch(action.type){
       case "Register_User" :
                action.payload.data = {
                    ...action.payload.data,
                    id: new Date().getTime().toString()
                }
                return{
                    ...state,
                    list: [
                        ...state.list, action.payload.data
                    
                    ],
                    templist: [
                        ...state.templist, action.payload.data,
                    ]
                }
            
        case "Edit_User" :
            const selectesObj = state.templist.find(ele => ele.id === action.payload.id);
            return {
                ...state,
                editedId: action.payload.id,
                editedObject: selectesObj,
            } 

        case "Delete_User" :
            return {
                ...state,
                list: state.list.filter(ele => ele.id !== action.payload.id),
                templist: state.templist.filter(ele => ele.id !== action.payload.id)
            }

        case "Save_Update" :
            
            const newListData = state.list.findIndex(ele => ele.id === action.payload.id);
            const newTempListData = state.templist.findIndex(ele => ele.id === action.payload.id);
            state.list[newListData] = action.payload.data;
            state.templist[newTempListData] = action.payload.data;
            return {
                ...state,
               
            }  

        case "User_Search" :
            console.log("data of searchreducers, ", action.payload.searchData);
            console.log("name and salary ", state.templist);
            return {
                ...state,
                list: state.templist.filter(ele => ele.Name === action.payload.searchData || ele.Salary.toString() === action.payload.searchData)
            }  

        case "All_Users" :
            return {
                ...state,
                list: state.templist
            }

        default :
            return state;
    }
}

export {Reducers}
