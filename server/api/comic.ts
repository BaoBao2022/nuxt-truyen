import MangaModel from "~/serveless/models/manga.model";
import {SourceCollection, SourceParams} from "~/contants";
import {reactive} from 'vue';
import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
import {RankingMangeRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
    const query = useQuery(event);
    const {slug} = reactive(query);
    // let model;
    //
    // switch (source) {
    //     case SourceParams.netTruyen:
    //         model = MangaModel.getInstance(SourceCollection[source]);
    //         break;
    //
    // }
    //
    // const comic = await model.getComic(slug);

    const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
    const mangas = await NET_TRUYEN_API?.getManga(slug as string);
    if (mangas.status !== 200)
        return []

    return mangas?.data.data
})