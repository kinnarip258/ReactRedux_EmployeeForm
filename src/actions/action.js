export const registerUser = (Name, Email ,Phone, Work, Salary,  Password , CPassword) => {
    return{
        type: "Register_User",
        payload: {
            id: new Date().getTime().toString(),
            Name, Email ,Phone, Work, Salary,  Password , CPassword
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

export const editUser = (id, data) => {
    return{
        type: "Edit_User",
        payload: {
            id, data
        }
    }
}

