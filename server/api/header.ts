import repositoryFactory, {NET_TRUYEN} from "~/server/repositoryFactory";
import {FilterRequest} from "~/server/request";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const filterRequest: FilterRequest = {page: 1, genres: "manhua", top: "month"}
    const mangas = await NET_TRUYEN_API?.filter(filterRequest);
    if (mangas.status !== 200) return;

    const manData = mangas?.data.data.slice(0, 10);

    const response = []
    for (let i = 0; i < 10; i++) {
        if (manData[i].review !== '' && manData[i].review) {
            const chapterRes = await NET_TRUYEN_API?.getManga(manData[i].slug);
            if (chapterRes?.status === 200) {
                manData[i].chapters = chapterRes.data.data.chapterList;
                response.push(manData[i]);
            }
        }
    }

    return response;
});