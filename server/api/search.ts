import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {AdvanceQueryRequest, FilterRequest} from "~/services/request";
import {useStorage} from "@vueuse/core";
import {keys} from "~/types";

export default defineEventHandler(async (event) => {

    const query = useQuery(event);
    const {status, sort, limit} = query;
    console.log("limit", limit)
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const filterRequest: FilterRequest = {
        page: 1,
        status: status as string,
        top: sort as string,
        limit: limit as any,
    }

    const mangas = await NET_TRUYEN_API?.filter(filterRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data;

});