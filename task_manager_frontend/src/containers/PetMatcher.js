import React, { Component } from "react"
import PetTypeMatchUps from "../constants/PetTypeMatchUps"

class PetMatcher extends Component{

    constructor(props){
        super(props)
    }

    render = () => <div className="pet-matcher">
        {PetTypeMatchUps.AQUATIC.name}
    </div>
}

export default PetMatcher