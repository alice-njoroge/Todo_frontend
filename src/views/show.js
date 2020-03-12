import React, {Component} from "react";
import axios from 'axios';

class User extends Component {
    state ={
        user :null
    };
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:3031/users/${id}`).then(res =>{
            const user = res.data;
            this.setState({
                user
            })
        }).catch(e =>{
            console.log(e.response);
        });

    }

    render() {
        const currentUser = this.state.user ? (
            <h2>{this.state.user.email}</h2>
        ) : (<div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div> );

       return (
           <div className="user">
               {currentUser}
           </div>
       );
   }
}

export default User;