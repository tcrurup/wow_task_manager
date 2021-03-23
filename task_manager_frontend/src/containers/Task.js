import React, { Component } from "react"
import TaskDetails from "../components/TaskDetails"

class Task extends Component{

    constructor(props){
        super(props)

        this.state = {
            task : "N/A",
            completed: false
        }
    }

    render = () => <TaskDetails currentTask={this.state.task}/>
}


export default Task