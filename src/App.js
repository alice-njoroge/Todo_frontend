import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./views/login";
import Users from "./views/users";
import Tasks from "./views/tasks";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/tasks' component={Tasks}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
