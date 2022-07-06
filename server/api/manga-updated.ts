import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest, RankingMangeRequest} from "~/services/request";
import {REVALIDATE_TIME} from "~/contants";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const mangas = await NET_TRUYEN_API?.getNewMangaUpdated(1);

    if (mangas.status !== 200)
        return []

    return mangas.data.data;
});