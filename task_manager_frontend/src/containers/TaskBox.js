import React, { Component } from "react"
import Task from "./Task"


class TaskBox extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            tasks: []            
        };
    }
    
    render = () => {
        return <div className="task-box">
            {this.props.taskBoxType}
            <button type="button" onClick={this.newTask.bind(this)}>New Task</button>
            {this.state.tasks}
        </div>
    }

    newTask(){
        this.setState(prevState => {
            return { tasks : [...prevState.tasks, <Task />] }
        })
    }
}

export default TaskBox