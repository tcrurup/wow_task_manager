import React, { Component } from "react"
import PetTypes from "../components/PetTypes"

class PetMatcher extends Component{

    constructor(props){
        super(props)
        this.petTypes = new PetTypes()
    }

    render = () => <div className="pet-matcher">
        {PetTypes.allPetMatchups.length}
    </div>
}

export default PetMatcher