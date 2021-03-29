import ALL_PET_MATCHUPS from "../constants/PetTypeConstants"
import PetType from "./PetType"

class PetTypes{

    constructor(){
        this.allTypes = []
        ALL_PET_MATCHUPS.map( x => this.allTypes.push(new PetType(x)) )
    }

    static get allPetMatchups(){ return ALL_PET_MATCHUPS }
}

export default PetTypes