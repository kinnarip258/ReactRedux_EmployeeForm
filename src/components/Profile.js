import React from "react";

const Profile = () => {
    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1> Profile of  </h1>
                </div>
                <hr />

                <div className="user_details">
                    <span>
                        <p>Name: </p> 
                        <p>Email Id: </p>
                        <p>Phone No.</p>
                        <p>Profession : </p>
                        <p>Salary: </p>
                    </span>

                </div>
            </div>
        </>
    )
}

export default Profile;