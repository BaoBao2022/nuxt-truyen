import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);

    // const genres = [
    //     'dam-my',
    //     'manhua',
    // ]
    const filterRequest: FilterRequest = {page: 1, genres: "dam-my", top: "day"}

    const mangas = await NET_TRUYEN_API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data.filter(spotlight => spotlight.review !== '');
});