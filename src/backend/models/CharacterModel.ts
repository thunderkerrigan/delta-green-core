type gender = 'male' | 'female' | 'non-binary'

export interface CharacterModel {
    firstName: string
    lastName: string
    gender: gender
    portrait?: string
    stats: Record<Stat, number>
    skills: Record<skills | string, number>
}

export type Stat =
    | 'Apparence'
    | 'Constitution'
    | 'Dexterité'
    | 'Force'
    | 'Taille'
    | 'Endurance'
    | 'Education'
    | 'Intelligence'
    | 'Pouvoir'

export type skills =
    | 'Baratin'
    | 'Arme à feu'
    | 'Bibliothèque'
    | 'Discretion'
    | 'Dissimulation'
    | 'Bricolage'
    | 'Criminalistique'
    | 'Vigilance'
    | 'Trouver objet caché'
    | 'Écouter'
    | 'Persuasion'
    | 'Négociation'
    | 'Perspicacité'
    | 'Corps à corps'
    | 'Arme de poing'
    | 'Sciences'
