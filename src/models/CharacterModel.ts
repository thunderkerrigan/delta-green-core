type gender = 'male' | 'female' | 'non-binary'


export interface CharacterModel extends CharacterSkills{
    firstName: string
    lastName: string
    gender: gender
    portrait?: string
    stats: Record<Stat, number>
    
}

export interface CharacterSkills {
    knowledgeSkills: Record<knowledgeSkills, number>
    expertiseSkills: Record<expertiseSkills, number>
    sensorialSkills: Record<sensorialSkills, number>
    influenceSkills: Record<influenceSkills, number>
    actionSkills: Record<actionSkills, number>
    otherSkills?: Record<string, number>
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

export type skills = knowledgeSkills | expertiseSkills | sensorialSkills | actionSkills | influenceSkills



export type knowledgeSkills = 'Bureaucratie'
    | 'Culture artistique'
    | 'Langue maternelle'
    | 'Mythe de Cthulhu'
    | 'Sciences de la terre'
    | 'Sciences de la vie'
    | 'Sciences formelles'
    | 'Sciences humaines'
    | 'Sciences occultes'

export type expertiseSkills = 'Bricolage' | 'Criminalistique' | 'Hypnose' | 'Médecine' | 'Métier' | 'Compatibilité' | 'Informatique' | 'Photographie' | 'Pratique artistique' | 'Premiers soins' | 'Psychanalyse' | 'Survie'

export type sensorialSkills = 'Bibliothèque' | 'Discrétion' | 'Dissimulation' | 'Écouter' | 'Orientation' | 'Pister' | 'Psychologie' | 'Se cacher' | 'Trouver Objet Caché' | 'Vigilance'

export type influenceSkills = 'Baratin' | 'Contacts & Ressources' | 'Crédit' | 'Imposture' | 'Interroger' | 'Jeu' | 'Négociation' | 'Perspicacité' | 'Persuasion' | 'Savoir-vivre'

export type actionSkills = 'Armes à feu' | 'Armes blanches' | 'Armes exotiques' | 'Artillerie' | 'Athlétisme' | 'Conduite' | 'Corps à corps' | 'Équitation' | 'Navigation' | 'Piloter'