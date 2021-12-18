import { Skills } from "./CharacterModel";
export interface Job {
    name: string;
    skills: Partial<Skills[] | string[]>;
}
