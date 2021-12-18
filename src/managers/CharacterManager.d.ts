import { CharacterModel } from "../models/CharacterModel";
export declare class CharacterManager {
    private randomSkills;
    private randomStats;
    private randomJob;
    private randomEmployer;
    private rollStats;
    private baseSensorialSkills;
    private baseExpertiseSkills;
    private baseInfluenceSkills;
    private baseKnowledgeSkills;
    private baseActionSkills;
    randomCharacter: (requestSeed?: string, requestedGender?: "male" | "female") => Promise<CharacterModel>;
}
export default CharacterManager;
