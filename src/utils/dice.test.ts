import { roll, rollDice } from './dice'

let distribution: Record<string, number> = {}

describe('roll testing', () => {
    beforeEach(() => {
        // console.log('!!!!wipe!!!!')
        distribution = {}
    })

    test.each([
        [1, 2],
        [1, 4],
        [1, 6],
        [1, 8],
        [1, 12],
        [1, 20],
        [1, 20, [1, 2, 4]],
        [1, 20, [1]],
        [1, 20, [5]],
        [1, 100],
        [12, 20],
        [20, 30],
        [2, 3],
    ])(
        'should roll between %i and %i (modifier: %j)',
        (min, max, modifiers = []) => {
            const mod = modifiers.reduce(
                (total: number, next: number): number => (total += next),
                0
            )
            for (let i = 0; i < 1000; i++) {
                const result = roll(min, max, modifiers)
                distribution[result]
                    ? distribution[result]++
                    : (distribution[result] = 1)
                expect(result).toBeGreaterThanOrEqual(min + mod)
                expect(result).toBeLessThanOrEqual(max + mod)
            }
        }
    )

    afterEach(() => {
        // console.log(JSON.stringify(distribution))
    })
})
