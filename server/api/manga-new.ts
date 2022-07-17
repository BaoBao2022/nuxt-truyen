import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
// import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const API = repositoryFactory(NET_TRUYEN);

    const query = useQuery(event);
    const {genres} = query;

    const mangas = await API?.getNewManga(1, genres as string);

    if (mangas.status !== 200)
        return []

    return mangas.data.data;
});