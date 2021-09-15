import React, { Component } from 'react'
import UserForm from './UserForm'

class User extends Component {
    render() {
            let list = [
                {
                    name:"Aline",
                    email:"aline@email.com"
                },
                {
                    name:"Teste",
                    email:"teste@email.com"
                }
            ]
        return(
            <div>
                <UserForm></UserForm>
                <table>
                    <tr>
                        <th>Name:</th>
                        <th>Email:</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default User;