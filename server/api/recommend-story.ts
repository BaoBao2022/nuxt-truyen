import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";
import {MANGA_SORT} from "~/types";

export default defineEventHandler(async () => {
    const API = repositoryFactory(NET_TRUYEN);
    const filterRequest: FilterRequest = {
        page: 1,
        status: 'all',
        sort: 'newComic' as any,
        limit: 4,
    }

    const mangas = await API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data;

});