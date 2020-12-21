import {model} from 'mongoose'

export interface DossierInterface {
    codename: string
    category: string
    title: string
    thumbnail: string
    articles: ArticleInterface[]
    resolved: boolean
}

export interface ArticleInterface {
    title: string
    media: string
    content: string
    author: string
}

// export const DossierModel = model<