import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
// import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    // const query = useQuery(event);
    // const {comic} = query;
    // let param = 'manhua';
    // if (comic) {
    //     param = comic as string;
    // }

    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const mangas = await NET_TRUYEN_API?.getNewManga(1);

    if (mangas.status !== 200)
        return []

    return mangas.data.data;
});