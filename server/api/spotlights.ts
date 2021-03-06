import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const API = repositoryFactory(NET_TRUYEN);
    const query = useQuery(event);
    const {genres} = query;

    const filterRequest: FilterRequest = {
        page: 1,
        genres: genres as string,
        sort: "new" as any,
        status: "all",
    }
    const mangas = await API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data.filter(spotlight => spotlight.review !== '');
});