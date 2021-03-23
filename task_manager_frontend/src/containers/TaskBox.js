import React, { Component } from "react"
import TaskDetails from "../components/TaskDetails"

class TaskBox extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            tasks: []
        };
    }
    
    render = () => {
        return <div className="taskBox">
            {this.props.taskBoxType}
            <button type="button" onClick={this.newTask.bind(this)}>New Task</button>
            {this.state.tasks}
        </div>
    }

    newTask(){
        this.setState(prevState => {
            return { tasks: [...prevState.tasks, <TaskDetails currentTask="N/A"/>] }
        })
    }
}

export default TaskBox