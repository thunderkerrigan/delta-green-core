import fs, { Stats } from 'fs'
import path from 'path'
import { roll } from '../../utils/dice'
import { CharacterModel, Stat } from '../models/CharacterModel'

export class CharacterManager {
    private femaleFirstNamesPool: string[]
    private maleFirstNamesPool: string[]
    private lastNamesPool: string[]

    constructor() {
        this.femaleFirstNamesPool = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, '../config/FemaleFirstName.json'),
                { encoding: 'utf-8', flag: 'r' }
            )
        )
        this.maleFirstNamesPool = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, '../config/MaleFirstName.json'),
                { encoding: 'utf-8', flag: 'r' }
            )
        )
        this.lastNamesPool = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, '../config/LastName.json'),
                {
                    encoding: 'utf-8',
                    flag: 'r',
                }
            )
        )
    }

    private randomLastName = () => {
        return this.randomName(this.lastNamesPool)
    }

    private randomMaleFirstName = () => {
        return this.randomName(this.maleFirstNamesPool)
    }

    private randomFemaleFirstName = () => {
        return this.randomName(this.femaleFirstNamesPool)
    }

    private randomName = (pool: string[]) => {
        const index = Math.round(Math.random() * pool.length)
        return pool[index]
    }

    private rollStats = (): number => {
        const rolls = [0, 0, 0, 0]
        const _map = rolls.map(() => roll(6))
        const _sort = _map.sort((a, b) => b - a)
        const _slice = _sort.slice(0, 3)
        const _reduce = _slice.reduce((total, next) => (total += next), 0)
        return _reduce
    }

    private randomStats = (): Record<Stat, number> => {
        return {
            Apparence: this.rollStats(),
            Constitution: this.rollStats(),
            Dexterité: this.rollStats(),
            Force: this.rollStats(),
            Taille: this.rollStats(),
            Endurance: this.rollStats(),
            Education: this.rollStats(),
            Intelligence: this.rollStats(),
            Pouvoir: this.rollStats(),
        }
    }

    public randomMaleCharacter = (): CharacterModel => {
        const lastName = this.randomLastName()
        const firstName = this.randomMaleFirstName()
        return {
            firstName,
            lastName,
            gender: 'male',
            portrait: 'none.png',
            stats: this.randomStats(),
            skills: { Baratin: 100 },
        }
    }
    public randomFemaleCharacter = (): CharacterModel => {
        const lastName = this.randomLastName()
        const firstName = this.randomFemaleFirstName()
        return {
            firstName,
            lastName,
            gender: 'female',
            portrait: 'none.png',
            stats: this.randomStats(),
            skills: { Baratin: 100 },
        }
    }
}
