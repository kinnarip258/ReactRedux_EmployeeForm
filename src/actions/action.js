export const registerUser = (data) => {
    return{
        type: "Register_User",
        payload: {
            data,
        }
    }    
}

export const editUser = (id) => {
    return{
        type: "Edit_User",
        payload:{
            id
        }

    }
}

export const deleteUser = (id) => {
    return{
        type: "Delete_User",
        payload: {
            id,
        }
        
    }
}

export const saveUpdate = (id,data) => {
    return {
        type: "Save_Update",
        payload:{
            id,data
        }
    }
}

export const userSearch = (searchData) => {
    return {
        type: "User_Search",
        payload:{
            searchData
        }
    }
}

export const allUsers = () => {
    return {
        type: "All_Users"
    }
}