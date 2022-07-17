import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const API = repositoryFactory(NET_TRUYEN);
    const query = useQuery(event);
    const { genres } = query;

    console.log("genres", genres)

    const filterRequest: FilterRequest = {
        genres: genres as string,
        page: 1,
        status: 'all',
        sort: 'day' as any,
        limit: 6,
    }

    const mangas = await API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data;

});