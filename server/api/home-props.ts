import repositoryFactory, {NET_TRUYEN} from "~/server/repositoryFactory";
import {FilterRequest, RankingMangeRequest} from "~/server/request";
import {REVALIDATE_TIME} from "~/contants";

export default defineEventHandler(async (event) => {
    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);

    // const filterRequest: FilterRequest = {page: 1, genres: "manga-112", top: "month"}
    const rankingAllRequest: RankingMangeRequest = {
        status: undefined,
        top: 'all',
        page: 1,
        genre: 'manhua'
    }

    const rankingMonthRequest: RankingMangeRequest = {
        status: undefined,
        top: 'month',
        page: 1,
        genre: 'manhua'
    }

    const rankingWeekRequest: RankingMangeRequest = {
        status: undefined,
        top: 'week',
        page: 2,
        genre: 'manhua'
    }

    const rankingDayRequest: RankingMangeRequest = {
        status: undefined,
        top: 'day',
        page: 3,
        genre: 'manhua'
    }

    const newMangaUpdated = await NET_TRUYEN_API?.getNewMangaUpdated(1);
    const topAllManga = await NET_TRUYEN_API?.getMangaRanking(rankingAllRequest);
    const topMonthManga = await NET_TRUYEN_API?.getMangaRanking(rankingMonthRequest);
    const topWeekManga = await NET_TRUYEN_API?.getMangaRanking(rankingWeekRequest);
    const topDayManga = await NET_TRUYEN_API?.getMangaRanking(rankingDayRequest);
    const newManga = await NET_TRUYEN_API?.getNewManga(1);

    const topMonthListData = topMonthManga?.data.data;
    const newMangaUpdatedData = newMangaUpdated?.data.data;
    const newMangaData = newManga?.data.data;

    return {
        // topMonthList: topMonthList.data.data,
        newMangaUpdated: newMangaUpdatedData,
        topAllManga: topAllManga?.data.data,
        topMonthManga: topMonthListData,
        topWeekManga: topWeekManga?.data.data,
        topDayManga: topDayManga?.data.data,
        newManga: newMangaData,
        revalidate: REVALIDATE_TIME,
    };
});