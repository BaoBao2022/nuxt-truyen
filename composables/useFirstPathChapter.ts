import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME, SourceParams} from "~/contants";
import {Manga, MangaDetails} from "~/types";
// import {useState} from "#build/imports";
// import {State} from '~/types';

const useFirstPathChapter = async (spotlight: Manga) => {
    const slug = spotlight.slug
    const {data: comic} = await useFetch(`/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`);
    if (!comic.value) {
        return '';
    }

    // useState(State.READ_CHAPTER, () => comic.value);
    const mangaDetail: MangaDetails = (comic.value as MangaDetails)

    const chapterId = mangaDetail?.chapterList && mangaDetail?.chapterList[mangaDetail.chapterList?.length - 1].chapterId;
    const chapterNumber = mangaDetail.chapterList && mangaDetail.chapterList[mangaDetail.chapterList?.length - 1].chapterNumber;

    const path = `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
    return path;
}

export default useFirstPathChapter;