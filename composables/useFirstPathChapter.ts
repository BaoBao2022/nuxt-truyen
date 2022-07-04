import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME, SourceParams} from "~/contants";
import {keys, Manga, MangaDetails} from "~/types";
import {useStorage} from "@vueuse/core";

const useFirstPathChapter = async (spotlight: Manga, slugs: string) => {
    const slug = slugs || spotlight?.slug
    const {data: comic} = await useFetch(`/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`);
    if (!comic.value) {
        return '';
    }

    const mangaDetail: MangaDetails = (comic.value as MangaDetails)

    // Cache manga detail to local storage
    useStorage(keys.MANGA_DETAIL, mangaDetail);

    const chapterId = mangaDetail?.chapterList && mangaDetail?.chapterList[mangaDetail.chapterList?.length - 1].chapterId;
    const chapterNumber = mangaDetail.chapterList && mangaDetail.chapterList[mangaDetail.chapterList?.length - 1].chapterNumber;

    return `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
}

export default useFirstPathChapter;