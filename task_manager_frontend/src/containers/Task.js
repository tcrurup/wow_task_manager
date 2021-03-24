import React, { Component } from "react"
import ProgressIndicator from "../components/ProgressIndicator"

class Task extends Component{

    constructor(props){
        super(props)

        this.state = {
            taskProgress: {
                current: 0,
                target: 1
            },
            details : "N/A",
            completed: false
        }
    }

    render = () => <div className="task">
        <div className = "task-character"></div>
        {this.state.details}
        <ProgressIndicator progress={this.state.taskProgress} />
    </div>

}

export default Task