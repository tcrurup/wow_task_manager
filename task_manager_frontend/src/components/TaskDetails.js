import React from "react"

const TaskDetails  = props => <div>
    <div className = "task-character"></div>
    {props.task.details}
    <div className = "task-progress"></div>
</div>

export default TaskDetails