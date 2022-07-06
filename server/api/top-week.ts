import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {GENRES, RankingMangeRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const query = useQuery(event);
    const {comic} = query;
    let param = 'dam-my';
    if (comic) {
        param = comic as string;
    }

    const rankingAllRequest: RankingMangeRequest = {
        status: undefined,
        top: 'week',
        page: 1,
        genre: param as GENRES
    }

    const mangas = await NET_TRUYEN_API?.getMangaRanking(rankingAllRequest);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data
});