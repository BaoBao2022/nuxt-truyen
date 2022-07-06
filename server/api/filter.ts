import repositoryFactory, { NET_TRUYEN } from "~/services/repositoryFactory";
import { AdvanceQueryRequest, GENRES } from "~/services/request";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const { comics, genres } = query;
  let comic = "manhua";
  if (comics) {
    comic = comics as string;
  }

  console.log("comics", comics);
  

  const filterRequest: AdvanceQueryRequest = {
    genres: genres as string,
    // genres: '3,25',
    // minchapter: 200,
    // status: 'ongoing',
    top: 'month'
  };

//   genres?: string;
//     gender?: number;
//     status?: string;
//     top?: string;
//     minchapter?: number;
//     page?: number;

  const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
  const mangas = await NET_TRUYEN_API?.advancedSearch(filterRequest);

  if (mangas.status !== 200) return [];

  return mangas.data.data;
});
