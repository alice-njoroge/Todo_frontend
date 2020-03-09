import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Login from "./views/login";
import Users from "./views/users";
import Tasks from "./views/tasks";

class App extends Component{
  render() {
    return(
        <div className="app">
          <Header/>
        </div>
    );
  }
}

export default App;
