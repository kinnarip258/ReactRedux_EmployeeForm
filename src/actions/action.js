export const registerUser = (Name, Email ,Phone, Work, Salary,  Password , CPassword) => {
    return{
        type: "Register_User",
        payload: {
            id: new Date().getTime().toString(),
            Name, Email ,Phone, Work, Salary,  Password , CPassword
            
        }
    }    
}

export const editUser = (id,Name) => {
    return{
        type: "Edit_User",
        payload: {
            id,Name
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

export const saveUpdate = (id, Name, Email ,Phone, Work, Salary,  Password , CPassword) => {
    return {
        type: "Save_Update",
        payload:{
            id, Name, Email ,Phone, Work, Salary,  Password , CPassword
        }
    }
}


export const loginUser = (Email, Password) => {
    return{
        type: "Login_User",
        payload: {
            Email,Password
        }
    }
}
