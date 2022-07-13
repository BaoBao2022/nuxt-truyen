import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME, SourceParams} from "~/contants";
import {keys, Manga, MangaDetails} from "~/types";
import {useStorage} from "@vueuse/core";

const useFirstPathChapter = async (spotlight: Manga, slugs: string | readonly string[]) => {
    const slug = slugs || spotlight?.slug
    const {data: comic} = await useFetch(`/api/comic?slug=${slug}`);
    if (!comic.value) {
        return '';
    }

    const mangas: MangaDetails = (comic.value as MangaDetails)
    // Cache manga detail to local storage
    const cache: any = useStorage(keys.mangaCacheDetail, {
        serializer: {
            read: (v: any) => v ? JSON.parse(v) : null,
            write: (v: any) => JSON.stringify(v),
        }
    });

    cache.value = null
    cache.value = {
        slug: slug,
        ...mangas,
    }

    const visitedComics: any = useStorage(keys.visitedComics, {
        serializer: {
            read: (v: any) => v ? JSON.parse(v) : null,
            write: (v: any) => JSON.stringify(v),
        }
    });

    if (visitedComics.value && visitedComics.value.length > 0) {
        const existingComic = visitedComics.value?.find((comic: any) => comic.slug === slug);
        if (!existingComic) {

            visitedComics.value.push({
                slug,
                ...mangas
            });
        }
    } else {
        visitedComics.value = [{
            slug,
            ...mangas
        }];
    }

    const chapterId = mangas?.chapterList && mangas?.chapterList[mangas.chapterList?.length - 1].chapterId;
    const chapterNumber = mangas.chapterList && mangas.chapterList[mangas.chapterList?.length - 1].chapterNumber;

    return `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
}

export default useFirstPathChapter;