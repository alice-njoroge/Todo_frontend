import React, {Component} from "react";
import { NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        return(
            <div className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;