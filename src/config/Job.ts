import { Job } from "../models/JobModel";

const Anthropologist: Job = {
  name: "Anthropologue",
  skills: [
    "Anthropologie",
    "Archéologie",
    "Bureaucratie",
    "Langue étrangère",
    "Langue étrangère",
    "Histoire",
    "Sciences occultes",
    "Persuasion",
    "​HUMINT",
    "Navigation",
    "Équitation",
    "Trouver Objet Caché",
    "Survie",
  ],
};
const Historian: Job = {
  name: "Historien",
  skills: [
    "Anthropologie",
    "Archéologie",
    "Bureaucratie",
    "Langue étrangère",
    "Langue étrangère",
    "Histoire",
    "Sciences occultes",
    "Persuasion",
    "​HUMINT",
    "Navigation",
    "Équitation",
    "Trouver Objet Caché",
    "Survie",
  ],
};
const ComputerScientist: Job = {
  name: "Informaticien",
  skills: [
    "Informatique",
    "Craft (Electrician)",
    "Craft (Mechanic)",
    "Craft (Microelectronics)",
    "Science (Mathematics)",
    "SIGINT",
    "Comptabilité",
    "Bureaucratie",
    "Métier",
    "Langue étrangère",
    "Drive Heavy Machine",
    "Law",
    "Science",
  ],
};
const Engineer: Job = {
  name: "Ingénieur",
  skills: [
    "Informatique",
    "Craft (Electrician)",
    "Craft (Mechanic)",
    "Craft (Microelectronics)",
    "Science (Mathematics)",
    "SIGINT",
    "Comptabilité",
    "Bureaucratie",
    "Métier",
    "Langue étrangère",
    "Drive Heavy Machine",
    "Law",
    "Science",
  ],
};

const FederalAgent: Job = {
  name: "Agent Fédéral",
  skills: [
    "Vigilance",
    "Bureaucratie",
    "Criminalistique",
    "Conduite",
    "Armes à feu",
    "Science forensique",
    "​HUMINT",
    "​Law​",
    "Persuasion",
    "Trouver Objet Caché",
    "Corps à corps",
    "Langue étrangère",
    "Comptabilité",
    "Informatique",
    "Heavy Weapons",
    "Pharmacie",
  ],
};

export const jobs = [
  Anthropologist,
  Historian,
  ComputerScientist,
  Engineer,
  FederalAgent,
];
