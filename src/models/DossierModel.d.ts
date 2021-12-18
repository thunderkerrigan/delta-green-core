import { ClearanceLevel } from "./CharacterModel";
export interface AssetInterface {
}
export declare enum SecretLevel {
    "extremely Secret" = 0,
    "Top Secret" = 1,
    "Secret" = 2,
    "Confidential" = 3,
    "Restricted" = 4,
    "Unclassified" = 5
}
export interface DossierInterface {
    title: string;
    codename: string;
    clearanceLevel: ClearanceLevel;
    thumbnail: string;
    articles: ArticleInterface[];
    resolved: boolean;
}
export interface ArticleInterface {
    title: string;
    SecretLevel: SecretLevel;
    media?: MediaInterface;
    content: string;
    author: string;
    subArticles?: ArticleInterface[];
}
export interface MediaInterface {
    title: string;
    url: string;
    details?: string;
}
