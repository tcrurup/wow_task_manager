import React, { Component } from "react"

class ProgressIndicator extends Component{

    constructor(props){
        super(props)
        this.state = {
            type: ""
        }
    }

    onChange = event => this.setState({ type: event.target.value })

    render = () => <div className="progress-indicator"> 
        {this.indicatorToRender()}
        <select onChange={this.onChange}>
            <option value="fraction">Fraction</option>
            <option value="progressBar">Progress Bar</option>
        </select>
    </div>

    indicatorToRender(){
        const x = this.props.progress.current
        const y = this.props.progress.target
        switch(this.state.type){
            case "fraction":
                return this.fraction(x, y)
            case "progressBar":
                return this.progressBar(x, y)
            default:
        }
    }

    fraction(current, target){
        return `${current} / ${target}`
    }

    progressBar(current, target){
        return <div className="progress-bar"> 
            <div className="progress-bar-fill" style={{ width: `${target/current}%` }}>

            </div>
        </div>
    }

}

export default ProgressIndicator