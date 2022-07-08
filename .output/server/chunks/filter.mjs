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

const filter = defineEventHandler(async (event) => {
  const query = useQuery(event);
  const { comics, genres } = query;
  console.log("comics", comics);
  const filterRequest = {
    genres,
    top: "month"
  };
  const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
  const mangas = await (NET_TRUYEN_API == null ? void 0 : NET_TRUYEN_API.advancedSearch(filterRequest));
  if (mangas.status !== 200)
    return [];
  return mangas.data.data;
});

export { filter as default };
//# sourceMappingURL=filter.mjs.map
