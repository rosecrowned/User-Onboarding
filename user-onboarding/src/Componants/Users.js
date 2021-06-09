import React from 'react'

function Users({details}) {
    if(!details) {
        return (
            <h2>Working to fetch your team!</h2>
        )
    }

    return(
        <div>
            <h2> {details.first_name}</h2>
            <p>Id: {details.id}</p>
            <p>Email: {details.email}</p>
            <p> Password: {details.password}</p>
        </div>
    )


}

export default Users