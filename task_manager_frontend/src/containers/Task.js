import React, { Component } from "react"

class Task extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentTask: "N/A"
        }
        return this
    }
    
    render = () => <div>
        {this.state.currentTask}
    </div>


}

export default Task