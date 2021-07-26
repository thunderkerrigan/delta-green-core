import { Job } from "./JobModel";

type gender = "male" | "female" | "non-binary";
export type ClearanceLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface CharacterModel extends CharacterSkills {
  firstName: string;
  lastName: string;
  clearanceLevel: ClearanceLevel;
  age: number;
  dob: string;
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

export type Stat =
  | "Apparence"
  | "Constitution"
  | "Dexterité"
  | "Force"
  | "Taille"
  | "Endurance"
  | "Education"
  | "Intelligence"
  | "Pouvoir";

export type Skills =
  | KnowledgeSkills
  | ExpertiseSkills
  | SensorialSkills
  | ActionSkills
  | InfluenceSkills;

export type KnowledgeSkills =
  | "Bureaucratie"
  | "Culture artistique"
  | "Langue maternelle"
  | "Mythe de Cthulhu"
  | "Sciences de la terre"
  | "Sciences de la vie"
  | "Sciences formelles"
  | "Sciences humaines"
  | "Sciences occultes";

export type ExpertiseSkills =
  | "Bricolage"
  | "Criminalistique"
  | "Hypnose"
  | "Médecine"
  | "Métier"
  | "Comptabilité"
  | "Informatique"
  | "Photographie"
  | "Pratique artistique"
  | "Premiers soins"
  | "Psychanalyse"
  | "Survie";

export type SensorialSkills =
  | "Bibliothèque"
  | "Discrétion"
  | "Dissimulation"
  | "Écouter"
  | "Orientation"
  | "Pister"
  | "Psychologie"
  | "Se cacher"
  | "Trouver Objet Caché"
  | "Vigilance";

export type InfluenceSkills =
  | "Baratin"
  | "Contacts & Ressources"
  | "Crédit"
  | "Imposture"
  | "Interroger"
  | "Jeu"
  | "Négociation"
  | "Perspicacité"
  | "Persuasion"
  | "Savoir-vivre";

export type ActionSkills =
  | "Armes à feu"
  | "Armes blanches"
  | "Armes exotiques"
  | "Artillerie"
  | "Athlétisme"
  | "Conduite"
  | "Corps à corps"
  | "Équitation"
  | "Navigation"
  | "Piloter";

interface Clearance {
  innerColor: string;
  outerColor: string;
  value: string;
}
