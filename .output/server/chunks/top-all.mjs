import { defineEventHandler } from 'h3';
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

const topAll = defineEventHandler(async (event) => {
  const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
  const rankingAllRequest = {
    status: void 0,
    top: "all",
    page: 3,
    genre: "manhua"
  };
  const mangas = await (NET_TRUYEN_API == null ? void 0 : NET_TRUYEN_API.getMangaRanking(rankingAllRequest));
  if (mangas.status !== 200)
    return [];
  return mangas == null ? void 0 : mangas.data.data;
});

export { topAll as default };
//# sourceMappingURL=top-all.mjs.map
