import React, { Component } from "react"
import PetTypes from "../components/PetTypes"

class PetMatcher extends Component{

    constructor(props){
        super(props)
        this.petTypes = new PetTypes()
    }

    render = () => <div className="pet-matcher">
        {this.petTypes.whatIsStrongAttackAgaint("aquatic")}
    </div>
}

export default PetMatcher