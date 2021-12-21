export const registerUser = (data) => {
    return{
        type: "Register_User",
        payload: {
            id: new Date().getTime().toString(),
            data,
            editing: false
        }
    }    
}

export const editUser = (id, data) => {
    return{
        type: "Edit_User",
        payload: {
            id, data
        }
    }
}

export const deleteUser = (id) => {
    return{
        type: "Delete_User",
        payload: {
            id
        }
    }
}

export const saveUpdate = (id, data) => {
    return {
        type: "Save_Update",
        payload:{
            id, data
        }
    }
}

export const userSearch = (data) => {
    return {
        type: "User_Search",
        payload:{
            data
        }
    }
}

export const allUsers = (data,Emplist) => {
    return {
        type: "All_Users",
        payload:{
            data,Emplist
        }
    }
}