import React, {Component} from "react";
import axios from "axios";
import swal from 'sweetalert';
import {Link} from "react-router-dom";


class Users extends Component {
    state = {
        users: [],
        success: null
    };

    componentDidMount() {
        this.getUsers();

    }

    getUsers = (e) => {
        axios.get(`http://127.0.0.1:3031/users/`)
            .then(res => {
                const users = res.data;
                this.setState({
                    users: users
                })
            }).catch(e => {
            console.log(e);
        })
    };

    deleteUser = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this User!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://127.0.0.1:3031/users/${id}`)
                        .then(res => {
                            swal(res.data.message, {
                                icon: "success",
                            });
                           this.getUsers();

                        })
                        .catch(e => {
                            swal(e.response.data.message);
                        });


                } else {
                    swal("User not deleted");
                }
            });




    };

    render() {
        const userList = this.state.users.map(user => {
            return (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn btn-outline-primary" to={`/users/${user.id}`}>Users</Link>
                        <button type="button" onClick={() => {
                            this.deleteUser(user.id)
                        }} className="btn btn-danger ml-2">Delete
                        </button>
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