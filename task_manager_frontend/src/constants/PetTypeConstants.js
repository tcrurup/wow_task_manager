import PetTypes from "./PetTypesOLD"

const ALL_PET_MATCHUPS = [
    
    Object.freeze({
        name: PetTypes.AQUATIC,
        strongAttack: PetTypes.ELEMENTAL,
        strongDefense: PetTypes.UNDEAD
    }),
    Object.freeze({
        name: PetTypes.BEAST,
        strongAttack: PetTypes.CRITTER,
        strongDefense: PetTypes.HUMANOID
    }),
    Object.freeze({
        name: PetTypes.CRITTER,
        strongAttack: PetTypes.UNDEAD,
        strongDefense: PetTypes.ELEMENTAL
    }),
    Object.freeze({
        name: PetTypes.DRAGONKIN,
        strongAttack: PetTypes.MAGIC,
        strongDefense: PetTypes.FLYING
    }),
    Object.freeze({
        name: PetTypes.ELEMENTAL,
        strongAttack: PetTypes.MECHANICAL,
        strongDefense: PetTypes.MECHANICAL
    }),
    Object.freeze({
        name: PetTypes.FLYING,
        strongAttack: PetTypes.AQUATIC,
        strongDefense: PetTypes.BEAST
    }),
    Object.freeze({
        name: PetTypes.HUMANOID,
        strongAttack: PetTypes.DRAGONKIN,
        strongDefense: PetTypes.CRITTER
    }),
    Object.freeze({
        name: PetTypes.MAGIC,
        strongAttack: PetTypes.FLYING,
        strongDefense: PetTypes.BEAST
    }),
    Object.freeze({
        name: PetTypes.MECHANICAL,
        strongAttack: PetTypes.BEAST,
        strongDefense: PetTypes.MAGIC
    }),
    Object.freeze({
        name: PetTypes.UNDEAD,
        strongAttack: PetTypes.HUMANOID,
        strongDefense: PetTypes.DRAGONKIN
    })

]

export default ALL_PET_MATCHUPS
