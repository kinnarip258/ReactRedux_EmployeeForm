export const registerUser = (Name, Email ,Phone, Work, Salary,  Password) => {
    return{
        type: "Register_User",
        payload: {
            id: new Date().getTime().toString(),
            Name, Email ,Phone, Work, Salary,  Password,
            editing: false
        }
    }    
}

export const editUser = (id, Name, Email ,Phone, Work, Salary,  Password) => {
    return{
        type: "Edit_User",
        payload: {
            id,Name, Email ,Phone, Work, Salary, Password
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

export const saveUpdate = (id, Name, Email ,Phone, Work, Salary,  Password) => {
    return {
        type: "Save_Update",
        payload:{
            id, Name, Email ,Phone, Work, Salary,  Password
        }
    }
}

export const userSearch = (data,Emplist) => {
    return {
        type: "User_Search",
        payload:{
            data,Emplist
        }
    }
}
