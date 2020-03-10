import React, {Component} from "react";
import axios from "axios";

class Tasks extends Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        this.getTasks();

    }

    getTasks = (e) => {
        axios.get(`http://127.0.0.1:3031/todos`).then(res => {
                const tasks = res.data;
                this.setState({
                    tasks: tasks
                })
            }
        ).catch(e => {
            console.log(e.response);
        })
    };

    render() {
        const taskList = this.state.tasks.map(task => {
            return (<tr key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.title}</td>
                <td>{task.completed ? "Yes":"No" } </td>
                <td>{task.user.name}</td>
                <td>Action</td>
            </tr>);
        });
        return (
            <div className="tasks">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="card">
                                <div className="card-header ml-1 mr-1 mt-1">
                                    User Tasks
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Completed</th>
                                            <th scope="col">Owner</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {taskList}
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

export default Tasks;