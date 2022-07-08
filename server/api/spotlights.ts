import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);

    // const genres = [
    //     'dam-my',
    //     'manhua',
    // ]
    const filterRequest: FilterRequest = {page: 1, genres: "ngon-tinh", top: "month"}

    const mangas = await NET_TRUYEN_API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    const response = mangas?.data.data.filter(spotlight => spotlight.review !== '');
    return response;

});