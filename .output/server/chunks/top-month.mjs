import { defineEventHandler, useQuery } from 'h3';
import { r as repositoryFactory, N as NET_TRUYEN } from './repositoryFactory.mjs';
import 'axios';
import 'query-string';
import './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';

const topMonth = defineEventHandler(async (event) => {
  const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
  const query = useQuery(event);
  const { comic } = query;
  let param = "manhua";
  if (comic) {
    param = comic;
  }
  const rankingAllRequest = {
    status: void 0,
    top: "month",
    page: 1,
    genre: param
  };
  console.log("rankingAllRequest", rankingAllRequest);
  const mangas = await (NET_TRUYEN_API == null ? void 0 : NET_TRUYEN_API.getMangaRanking(rankingAllRequest));
  if (mangas.status !== 200)
    return [];
  return mangas == null ? void 0 : mangas.data.data;
});

export { topMonth as default };
//# sourceMappingURL=top-month.mjs.map
