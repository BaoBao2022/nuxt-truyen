import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME} from "~/contants";

const useMangaPagePath = (slug: string) => {
    return `/${MANGA_PATH_NAME}?slug=${slug}`;
}

export default useMangaPagePath;