
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
            const {id, data } = action.payload;
            return {
                ...state,
                list: state.list.map(ele => ele.id === id ? {...ele, data,
                    editing: false} : ele),
                searchlist: state.searchlist.map(ele => ele.id === id ? {...ele, data,
                    editing: false} : ele)

            }  

        case "User_Search" :
            console.log("list from the search reducers: ", state.searchlist);
            console.log("data from search reducers: ", action.payload.data);
            return {
                ...state,
                list: state.searchlist.filter(ele => ele.data.Name === action.payload.data || ele.data.Salary === action.payload.data)
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

export {Reducers}
