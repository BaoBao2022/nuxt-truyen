import MangaModel from "~/serveless/models/manga.model";
import {SourceCollection, SourceParams} from "~/contants";
import {reactive} from 'vue';

export default defineEventHandler(async (event) => {
    const query = useQuery(event);
    const {slug, source} = reactive(query);
    let model;

    switch (source) {
        case SourceParams.netTruyen:
            model = MangaModel.getInstance(SourceCollection[source]);
            break;

    }

    const comic = await model.getComic(slug);
    return {
        success: true,
        data: comic
    }
})