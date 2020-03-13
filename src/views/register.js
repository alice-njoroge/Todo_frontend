import React, {Component} from "react";
import {connect} from 'react-redux';
import axios from "axios";

class Register extends Component {
    state = {
        user: {
            name: null,
            email: null,
            password: null,
            confirm_password:null
        },
        hidden: true,
        error:null,

    };

    handleChange = (e) => {
        let user = this.state.user;
        user[e.target.id] = e.target.value;
        this.setState({
            user
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.user.password !== this.state.user.confirm_password){
            this.setState({
                error:true
            });

        }else {
            let user = this.state.user;
            delete user['confirm_password'];
            axios.post(`http://127.0.0.1:3031/users`, user)
                .then(res => {
                    console.log(res.data);
                    this.props.registerNew(res.data);
                    this.props.sendSuccessMessage("User created successfully");
                    this.props.history.push('/');
                }).catch(e => {
                console.log(e.response);
            });
        }

    };
    toggleShow = (e) => {
        this.setState({
            hidden:!this.state.hidden
        });

    };

    render() {
        return (
            <div className="register container">
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <div className="card">
                            <div className="card-header">
                                Register Here
                            </div>
                            <div className="card-body">
                                {this.state.error?(
                                    <div className="alert alert-danger" role="alert">
                                        Passwords did not match!
                                    </div>
                                ):''}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" onChange={this.handleChange}
                                               id="name"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" onChange={this.handleChange}
                                               id="email"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group">
                                            <input type={this.state.hidden ? "password" : "text"} className="form-control" onChange={this.handleChange}
                                                   id="password"/>
                                            <div className="input-group-append" onClick={this.toggleShow}>
                                                    <span className="input-group-text pointer"
                                                          id="basic-addon2">{this.state.hidden? ("show"): ("hide")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Password</label>
                                        <div className="input-group">
                                            <input type={this.state.hidden ? "password" : "text"} className="form-control" onChange={this.handleChange}
                                                   id="confirm_password"/>
                                            <div className="input-group-append" onClick={this.toggleShow}>
                                                    <span className="input-group-text pointer"
                                                          id="basic-addon2">{this.state.hidden? ("show"): ("hide")}</span>
                                            </div>
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                .
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerNew: (user) => {
            dispatch({type: 'REGISTER_NEW', user})
        },
        sendSuccessMessage:(message)=>{
            dispatch ({type:'SUCCESS_MESSAGE', message})
        }

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);