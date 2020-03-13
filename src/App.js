import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./views/login";
import Users from "./views/users";
import Tasks from "./views/tasks";
import User from "./views/show";
import Register from "./views/register";
import Home from "./views/Home";
import Success from "./components/successRedux";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Success />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/register' component={Register}/>
                    <Route  path='/login' component={Login}/>
                    <Route path='/users/:id' component={User}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/tasks' component={Tasks}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
