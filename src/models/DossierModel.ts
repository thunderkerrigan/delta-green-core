import { model } from "mongoose";
import { ClearanceLevel } from "./CharacterModel";

export interface AssetInterface {}
export enum SecretLevel {
  "extremely Secret",
  "Top Secret",
  "Secret",
  "Confidential",
  "Restricted",
  "Unclassified",
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
// export const DossierModel = model<

// wiki
// gu7J6KUGGAqH4s9
