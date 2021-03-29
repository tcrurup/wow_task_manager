import ALL_PET_MATCHUPS from "../constants/PetTypeConstants"
import PetType from "./PetType"

class PetTypes{

    constructor(){
        this.allTypes = []
        ALL_PET_MATCHUPS.map( x => this.allTypes.push(new PetType(x)) )
    }

    whatIsStrongAttackAgaint(typeName){
        let type = this.allTypes.find(x => x.strongAttack === typeName)
        return type.name
    }

    whatIsStrongDefenseAgainst(typeName){
        let type = this.allTypes.filter(x => x.strongDefense === typeName)
        return type.name
    }

    whatIsWeakAttackAgainst(typeName){
        let type = this.allTypes.filter(x => x.name === typeName)
        return type.strongDefense
    }

    whatIsWeakDefenseAgainst(typeName){
        let type = this.allTypes.filter(x => x.name === typeName)
        return type.strongAttack
    }

    static get allPetMatchups(){ return ALL_PET_MATCHUPS }
}

export default PetTypes