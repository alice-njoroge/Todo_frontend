import React, {Component} from "react";
import axios from "axios";

class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:3031/users/`)
            .then(res => {
                const users = res.data;
                this.setState({
                    users: users
                })
            }).catch(e => {
            console.log(e);
        })

    }

    render() {
        const userList = this.state.users.map(user => {
            return (
                <tr key={user.id}>
                    <th scope="row">1</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Roles</button>
                        <button type="button" className="btn btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="users">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="card">
                                <div className="card-header">
                                    List of Users
                                    <button type="button" className="btn btn-success float-right">Create New</button>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {userList}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;