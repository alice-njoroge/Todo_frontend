import React, {Component} from "react";
import axios from 'axios';

class User extends Component {
    state = {
        user: null,
        fetching: false,
        error: null
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            fetching: true,
            error: null
        });
        axios.get(`http://127.0.0.1:3031/users/${id}`).then(res => {
            const user = res.data;
            this.setState({
                user: user,
                fetching: false
            });
        }).catch(e => {
            this.setState({
                error: e.response.data.message,
                fetching: false
            });
            console.log(e.response);
        });

    }

    render() {

        return (
            <div className="user container">
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                {this.state.fetching ? (<div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>) : ''}
                                {this.state.error ? (
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.error}
                                    </div>
                                ) : ''}
                                {this.state.user ? (
                                    <div>
                                        <p><strong>Name:</strong> {this.state.user.name}</p>
                                        <p><strong>Email:</strong> {this.state.user.email}</p>
                                    </div>
                                ) : ''}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default User;