import React, {Component} from "react";
import {connect} from 'react-redux';

class Register extends Component {

    handleChange = (e) => {
        let user = this.props.user;
        user[e.target.id] = e.target.value;
       this.props.registerNew(this.props.user);
    };
    handleSubmit = (e)=>{
        e.preventDefault();

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
                                        <input type="password" className="form-control" onChange={this.handleChange}
                                               id="password"/>
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
        registerNew : (user)=>{ dispatch({type:'REGISTER_NEW', user})}

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);