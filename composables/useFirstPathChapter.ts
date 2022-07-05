import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME, SourceParams} from "~/contants";
import {keys, Manga, MangaDetails} from "~/types";
import {useStorage} from "@vueuse/core";

const useFirstPathChapter = async (spotlight: Manga, slugs: string) => {
    console.log("1")
    const slug = slugs || spotlight?.slug
    const {data: comic} = await useFetch(`/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`);
    if (!comic.value) {
        return '';
    }

    const mangas: MangaDetails = (comic.value as MangaDetails)
    // Cache manga detail to local storage
    const cache = useStorage(keys.MANGA_DETAIL, '');
    cache.value = null
    cache.value = JSON.stringify(mangas)

    const chapterId = mangas?.chapterList && mangas?.chapterList[mangas.chapterList?.length - 1].chapterId;
    const chapterNumber = mangas.chapterList && mangas.chapterList[mangas.chapterList?.length - 1].chapterNumber;

    return `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
}

export default useFirstPathChapter;