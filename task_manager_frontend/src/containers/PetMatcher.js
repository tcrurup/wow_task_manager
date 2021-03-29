import React, { Component } from "react"
import Pet from "../components/Pet"
import PetTypes from "../constants/PetTypes"

class PetMatcher extends Component{

    constructor(props){
        super(props)
    }

    render = () => <div className="pet-matcher">
        {PetTypes.AQUATIC}
    </div>
}

export default PetMatcher