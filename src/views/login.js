import React, {Component} from "react";
import axios from "axios";
import FormError from "../components/error";
import SuccessBox from "../components/success";

class Login extends Component {
    state = {
        form: {
            email: null,
            password: null
        },
        error: null,
        success:null
    };
    handleChange = (e) => {
        let form = this.state.form;
        form[e.target.id] = e.target.value;
        this.setState({
            form: form
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({error: null});
        axios.post(`http://127.0.0.1:3031/users/login`, this.state.form)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                this.setState({
                    success:true
                });
                return this.props.history.push('/users');

            }).catch(e => {
            this.setState({
                error:e.response.data.message
            })
        });

    };

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="card">
                                <div className="card-header mt-1 ml-1 mr-1">
                                    Login
                                </div>
                                <div className="card-body">
                                    <SuccessBox success={this.state.success}/>
                                    <FormError error={this.state.error} />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" onChange={this.handleChange} className="form-control"
                                                   id="email"
                                                   aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" onChange={this.handleChange} className="form-control"
                                                   id="password"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;