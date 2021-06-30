import { roll } from "../utils/dice";
import {
  actionSkills,
  CharacterModel,
  CharacterSkills,
  expertiseSkills,
  influenceSkills,
  knowledgeSkills,
  sensorialSkills,
  skills,
  Stat,
} from "../models/CharacterModel";
import { getRandomCharacter } from "../services/RandomUserService";
export class CharacterManager {
  private rollStats = (): number => {
    const rolls = [0, 0, 0, 0];
    const _map = rolls.map(() => roll(6));
    const _sort = _map.sort((a, b) => b - a);
    const _slice = _sort.slice(0, 3);
    const _reduce = _slice.reduce((total, next) => (total += next), 0);
    return _reduce;
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

  private randomSkills = (
    basicStats: Record<Stat, number>
  ): CharacterSkills => {
    const knowledgeSkills = this.baseKnowledgeSkills(basicStats);
    const sensorialSkills = this.baseSensorialSkills();
    const actionSkills = this.baseActionSkills(basicStats);
    const expertiseSkills = this.baseExpertiseSkills();
    const influenceSkills = this.baseInfluenceSkills(basicStats);
    return {
      knowledgeSkills,
      expertiseSkills,
      sensorialSkills,
      influenceSkills,
      actionSkills,
    };
  };

  private baseSensorialSkills = (): Record<sensorialSkills, number> => {
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

  private baseExpertiseSkills = (): Record<expertiseSkills, number> => {
    return {
      Bricolage: 20,
      Criminalistique: 0,
      Hypnose: 5,
      Médecine: 5,
      Métier: 5,
      Compatibilité: 5,
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
  ): Record<influenceSkills, number> => {
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
  ): Record<knowledgeSkills, number> => {
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
  ): Record<actionSkills, number> => {
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
    gender: "male" | "female"
  ): Promise<CharacterModel> => {
    const { name, picture } = await getRandomCharacter(gender);
    const stats = this.randomStats();
    const skills = this.randomSkills(stats);
    return {
      firstName: name.first,
      lastName: name.last,
      gender,
      portrait: picture.medium,
      stats,
      ...skills,
    };
  };
}

export default CharacterManager;
