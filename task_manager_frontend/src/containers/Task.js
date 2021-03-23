import React, { Component } from "react"
import TaskDetails from "../components/TaskDetails"

class Task extends Component{

    constructor(props){
        super(props)

        this.state = {
            progress : [0, 0],
            details : "N/A",
            completed: false
        }
    }

    render = () => <TaskDetails task={this.state}/>
}


export default Task