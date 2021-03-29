import PetTypeEnum from "../enums/PetTypeEnum"

const ALL_PET_MATCHUPS = [
    
    Object.freeze({
        name: PetTypeEnum.AQUATIC,
        strongAttack: PetTypeEnum.ELEMENTAL,
        strongDefense: PetTypeEnum.UNDEAD
    }),
    Object.freeze({
        name: PetTypeEnum.BEAST,
        strongAttack: PetTypeEnum.CRITTER,
        strongDefense: PetTypeEnum.HUMANOID
    }),
    Object.freeze({
        name: PetTypeEnum.CRITTER,
        strongAttack: PetTypeEnum.UNDEAD,
        strongDefense: PetTypeEnum.ELEMENTAL
    }),
    Object.freeze({
        name: PetTypeEnum.DRAGONKIN,
        strongAttack: PetTypeEnum.MAGIC,
        strongDefense: PetTypeEnum.FLYING
    }),
    Object.freeze({
        name: PetTypeEnum.ELEMENTAL,
        strongAttack: PetTypeEnum.MECHANICAL,
        strongDefense: PetTypeEnum.MECHANICAL
    }),
    Object.freeze({
        name: PetTypeEnum.FLYING,
        strongAttack: PetTypeEnum.AQUATIC,
        strongDefense: PetTypeEnum.BEAST
    }),
    Object.freeze({
        name: PetTypeEnum.HUMANOID,
        strongAttack: PetTypeEnum.DRAGONKIN,
        strongDefense: PetTypeEnum.CRITTER
    }),
    Object.freeze({
        name: PetTypeEnum.MAGIC,
        strongAttack: PetTypeEnum.FLYING,
        strongDefense: PetTypeEnum.BEAST
    }),
    Object.freeze({
        name: PetTypeEnum.MECHANICAL,
        strongAttack: PetTypeEnum.BEAST,
        strongDefense: PetTypeEnum.MAGIC
    }),
    Object.freeze({
        name: PetTypeEnum.UNDEAD,
        strongAttack: PetTypeEnum.HUMANOID,
        strongDefense: PetTypeEnum.DRAGONKIN
    })

]

export default ALL_PET_MATCHUPS
