import { roll } from "../utils/dice";
import {
  ActionSkills,
  CharacterModel,
  CharacterSkills,
  ClearanceLevel,
  ExpertiseSkills,
  InfluenceSkills,
  KnowledgeSkills,
  SensorialSkills,
  Stat,
} from "../models/CharacterModel";
import { getRandomCharacter } from "../services/RandomUserService";
import { Job } from "../models/JobModel";
import { jobs } from "../config/Job";
import { v4 as uuidV4 } from "uuid";

export class CharacterManager {
  private randomSkills = (
    basicStats: Record<Stat, number>,
    job: Job
  ): CharacterSkills => {
    const knowledgeSkills = this.baseKnowledgeSkills(basicStats);
    const sensorialSkills = this.baseSensorialSkills();
    const actionSkills = this.baseActionSkills(basicStats);
    const expertiseSkills = this.baseExpertiseSkills();
    const influenceSkills = this.baseInfluenceSkills(basicStats);
    const otherSkills: Record<string, number> = {};
    const mastery = [80, 70, 60, 60, 50, 50, 50, 40];
    const availableSkills = job.skills;
    let pickedSkills: string[] = [];
    const knowledgeSkillsKeys = Object.keys(knowledgeSkills);
    const expertiseSkillsKeys = Object.keys(expertiseSkills);
    const sensorialSkillsKeys = Object.keys(sensorialSkills);
    const influenceSkillsKeys = Object.keys(influenceSkills);
    const actionSkillsKeys = Object.keys(actionSkills);

    mastery.forEach((value) => {
      const remainingSkills = availableSkills.filter!(
        (skill) => skill && pickedSkills.indexOf(skill) === -1
      );
      const index = roll(remainingSkills.length - 1);
      const newSkill = remainingSkills[index];
      if (!newSkill) {
        return;
      }
      pickedSkills.push(newSkill);
      if (knowledgeSkillsKeys.indexOf(newSkill) !== -1) {
        knowledgeSkills[newSkill as KnowledgeSkills] = value;
      } else if (expertiseSkillsKeys.indexOf(newSkill) !== -1) {
        expertiseSkills[newSkill as ExpertiseSkills] = value;
      } else if (sensorialSkillsKeys.indexOf(newSkill) !== -1) {
        sensorialSkills[newSkill as SensorialSkills] = value;
      } else if (influenceSkillsKeys.indexOf(newSkill) !== -1) {
        influenceSkills[newSkill as InfluenceSkills] = value;
      } else if (actionSkillsKeys.indexOf(newSkill) !== -1) {
        actionSkills[newSkill as ActionSkills] = value;
      } else {
        otherSkills[newSkill] = value;
      }
    });
    return {
      knowledgeSkills,
      expertiseSkills,
      sensorialSkills,
      influenceSkills,
      actionSkills,
      otherSkills,
    };
  };

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
    };
  };

  private randomJob = (): Job => {
    const index = roll(jobs.length - 1);
    console.log(`jobs ${index}/ ${jobs.length}`);
    return jobs[index];
  };

  private randomEmployer = (): string => {
    const employers = [
      "FBI",
      "NSA",
      "SECRET SERVICE",
      "Washington Post",
      "Marshall",
      "Bank Of America",
    ];
    const index = roll(employers.length - 1);
    console.log(`jobs ${index}/ ${employers.length}`);
    return employers[index];
  };

  private rollStats = (): number => {
    const rolls = [0, 0, 0, 0];
    const _map = rolls.map(() => roll(6));
    const _sort = _map.sort((a, b) => b - a);
    const _slice = _sort.slice(0, 3);
    const _reduce = _slice.reduce((total, next) => (total += next), 0);
    return _reduce;
  };

  private baseSensorialSkills = (): Record<SensorialSkills, number> => {
    return {
      Bibliothèque: 25,
      Discrétion: 10,
      Dissimulation: 15,
      Écouter: 25,
      Orientation: 10,
      Pister: 10,
      Psychologie: 5,
      "Se cacher": 10,
      "Trouver Objet Caché": 25,
      Vigilance: 25,
    };
  };

  private baseExpertiseSkills = (): Record<ExpertiseSkills, number> => {
    return {
      Bricolage: 20,
      Criminalistique: 0,
      Hypnose: 5,
      Médecine: 5,
      Métier: 5,
      Comptabilité: 5,
      Informatique: 5,
      Photographie: 10,
      "Pratique artistique": 5,
      "Premiers soins": 5,
      Psychanalyse: 0,
      Survie: 0,
    };
  };

  private baseInfluenceSkills = (
    basicStats: Record<Stat, number>
  ): Record<InfluenceSkills, number> => {
    return {
      Baratin: 5,
      "Contacts & Ressources": 10,
      Crédit: 15,
      Imposture: 0,
      Interroger: 10,
      Jeu: 10,
      Négociation: 5,
      Perspicacité: basicStats.Intelligence * 2,
      Persuasion: 15,
      "Savoir-vivre": basicStats.Education * 2,
    };
  };

  private baseKnowledgeSkills = (
    basicStats: Record<Stat, number>
  ): Record<KnowledgeSkills, number> => {
    return {
      Bureaucratie: 10,
      "Culture artistique": 10,
      "Langue maternelle": basicStats.Intelligence * 5,
      "Mythe de Cthulhu": 0,
      "Sciences de la terre": 0,
      "Sciences de la vie": 0,
      "Sciences formelles": 0,
      "Sciences humaines": 0,
      "Sciences occultes": 0,
    };
  };

  private baseActionSkills = (
    basicStats: Record<Stat, number>
  ): Record<ActionSkills, number> => {
    return {
      Artillerie: 15,
      "Armes blanches": 20,
      Conduite: 20,
      "Armes exotiques": 0,
      "Armes à feu": 20,
      Athlétisme: 15,
      "Corps à corps": basicStats.Dexterité * 2,
      Équitation: 5,
      Navigation: 0,
      Piloter: 0,
    };
  };

  public randomCharacter = async (
    requestSeed?: string,
    requestedGender?: "male" | "female"
  ): Promise<CharacterModel> => {
    const { seed, name, picture, gender, dob, nat, location, cell } =
      await getRandomCharacter(requestSeed, requestedGender);
    const stats = this.randomStats();
    const job = this.randomJob();
    const skills = this.randomSkills(stats, job);
    const employer = this.randomEmployer();
    return {
      id: uuidV4(),
      seed,
      firstName: name.first,
      lastName: name.last,
      clearanceLevel: roll(5, 0) as ClearanceLevel,
      gender,
      profession: job,
      employer,
      cellPhone: cell,
      nationality: nat,
      educationAndOccupationalHistory: `${location.coordinates.latitude}${location.coordinates.longitude}`,
      age: dob.age,
      dob: dob.date,
      portrait: picture.medium,
      stats,
      ...skills,
    };
  };
}

export default CharacterManager;
