import {Chapter, Genre} from './chapter';
export type Status = 'Đang tiến hành' | 'Hoàn thành';

export type SourceCrawl = 'nettruyen' | 'hamtruyen' | 'mangareader';

export interface SearchResponseData {
    thumbnail: string;
    name: string;
    slug: string;
    newChapter: string;
    genres: string[];
}

export interface Manga extends SearchResponseData {
    status: Status;
    author: string;
    otherName: string;
    review: string;
    updatedAt: string;
    chapters?: Chapter[];
    view: string;
}

export interface MangaDetails {
    title: string;
    updatedAt: string;
    otherName: string;
    author: string;
    thumbnail: string;
    status: string;
    genres: Genre[];
    view: string;
    review: string;
    chapterList: Chapter[];
}

export type HeadlessManga = Pick<MangaDetails, 'chapterList' | 'title'> & {
    mangaSlug: string;
};