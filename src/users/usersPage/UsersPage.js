import React from "react";


function  Users (props) {
    return (
        <ul>
            {
                props.users.map((user, key )=> {

                    return (
                        <li style = {{marginBottom: "30px"}} key={key}>
                            <div>
                                name: {user.name}
                            </div>
                            <div>
                                age: {user.age}
                            </div>
                            <div>
                                position: {user.position}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Users;