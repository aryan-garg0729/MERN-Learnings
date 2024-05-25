import React from 'react'
import DeleteAllUsers from './DeleteAllUsers';
const UserDetails = () => {
    const addNewUser = ()=>{

    }
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="admin-table">
                        <div className="admin-subtitle">list of user details</div>
                        <button onClick={addNewUser}>Add new user</button>
                    </div>
                    <ul>
                        <li>Ki</li>
                        <li>Ki</li>
                        <li>Ki</li>
                    </ul>
                    <hr />
                    <DeleteAllUsers/>
                </div>
            </div>
            
        </>
    )
}
export default UserDetails;