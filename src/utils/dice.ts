export const roll = (
    faces: number,
    min: number = 1,
    modifiers: number[] = []
): number =>
    rollDice(min, faces) +
    modifiers.reduce(
        (total: number, next: number): number => (total += next),
        0
    )

export const rollDice = (min: number, max: number): number =>
    min - 1 + Math.ceil(Math.random() * (max - min + 1))
