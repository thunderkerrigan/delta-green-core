import { Job } from "./JobModel";
declare type gender = "male" | "female" | "non-binary";
export declare type ClearanceLevel = 0 | 1 | 2 | 3 | 4 | 5;
export interface CharacterModel extends CharacterSkills {
    id: string;
    seed: string;
    firstName: string;
    lastName: string;
    clearanceLevel: ClearanceLevel;
    age: number;
    dob: string;
    cellPhone: string;
    profession: Job;
    employer: string;
    nationality: string;
    educationAndOccupationalHistory: string;
    gender: gender;
    portrait?: string;
    stats: Record<Stat, number>;
}
export interface CharacterSkills {
    knowledgeSkills: Record<KnowledgeSkills, number>;
    expertiseSkills: Record<ExpertiseSkills, number>;
    sensorialSkills: Record<SensorialSkills, number>;
    influenceSkills: Record<InfluenceSkills, number>;
    actionSkills: Record<ActionSkills, number>;
    otherSkills?: Record<string, number>;
}
export declare type Stat = "Apparence" | "Constitution" | "Dexterité" | "Force" | "Taille" | "Endurance" | "Education" | "Intelligence" | "Pouvoir";
export declare type Skills = KnowledgeSkills | ExpertiseSkills | SensorialSkills | ActionSkills | InfluenceSkills;
export declare type KnowledgeSkills = "Bureaucratie" | "Culture artistique" | "Langue maternelle" | "Mythe de Cthulhu" | "Sciences de la terre" | "Sciences de la vie" | "Sciences formelles" | "Sciences humaines" | "Sciences occultes";
export declare type ExpertiseSkills = "Bricolage" | "Criminalistique" | "Hypnose" | "Médecine" | "Métier" | "Comptabilité" | "Informatique" | "Photographie" | "Pratique artistique" | "Premiers soins" | "Psychanalyse" | "Survie";
export declare type SensorialSkills = "Bibliothèque" | "Discrétion" | "Dissimulation" | "Écouter" | "Orientation" | "Pister" | "Psychologie" | "Se cacher" | "Trouver Objet Caché" | "Vigilance";
export declare type InfluenceSkills = "Baratin" | "Contacts & Ressources" | "Crédit" | "Imposture" | "Interroger" | "Jeu" | "Négociation" | "Perspicacité" | "Persuasion" | "Savoir-vivre";
export declare type ActionSkills = "Armes à feu" | "Armes blanches" | "Armes exotiques" | "Artillerie" | "Athlétisme" | "Conduite" | "Corps à corps" | "Équitation" | "Navigation" | "Piloter";
export {};
