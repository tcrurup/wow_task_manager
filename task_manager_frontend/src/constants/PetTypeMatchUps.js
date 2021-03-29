import PetTypes from "./PetTypes"

class PetTypeMatchUps{

    static get AQUATIC(){ 
        return Object.freeze({
            name: PetTypes.AQUATIC,
            strongAttack: PetTypes.ELEMENTAL,
            strongDefense: PetTypes.UNDEAD
        }) 
    }
    static get BEAST(){
        return Object.freeze({
            name: PetTypes.BEAST,
            strongAttack: PetTypes.CRITTER,
            strongDefense: PetTypes.HUMANOID
        })
    }
    static get CRITTER(){
        return Object.freeze({
            name: PetTypes.CRITTER,
            strongAttack: PetTypes.UNDEAD,
            strongDefense: PetTypes.ELEMENTAL
        })
    }
    static get DRAGONKIN(){
        return Object.freeze({
            name: PetTypes.DRAGONKIN,
            strongAttack: PetTypes.MAGIC,
            strongDefense: PetTypes.FLYING
        })
    }
    static get ELEMENTAL(){
        return Object.freeze({
            name: PetTypes.ELEMENTAL,
            strongAttack: PetTypes.MECHANICAL,
            strongDefense: PetTypes.MECHANICAL
        })
    }
    static get FLYING(){
        return Object.freeze({
            name: PetTypes.FLYING,
            strongAttack: PetTypes.AQUATIC,
            strongDefense: PetTypes.BEAST
        })
    }
    static get HUMANOID(){
        return Object.freeze({
            name: PetTypes.HUMANOID,
            strongAttack: PetTypes.DRAGONKIN,
            strongDefense: PetTypes.CRITTER
        })
    }
    static get MAGIC(){
        return Object.freeze({
            name: PetTypes.MAGIC,
            strongAttack: PetTypes.FLYING,
            strongDefense: PetTypes.BEAST
        })
    }
    static get MECHANICAL(){
        return Object.freeze({
            name: PetTypes.MECHANICAL,
            strongAttack: PetTypes.BEAST,
            strongDefense: PetTypes.MAGIC
        })
    }
    static get UNDEAD(){
        return Object.freeze({
            name: PetTypes.UNDEAD,
            strongAttack: PetTypes.HUMANOID,
            strongDefense: PetTypes.DRAGONKIN
        })
    }
}

export default PetTypeMatchUps

