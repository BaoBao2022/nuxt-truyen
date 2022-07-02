import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const filterRequest: FilterRequest = {page: 1, genres: "manhua", top: "month"}

    const mangas = await NET_TRUYEN_API?.filter(filterRequest);

    if (mangas.status !== 200)
        return []

    return mangas?.data.data.slice(0, 10);
});