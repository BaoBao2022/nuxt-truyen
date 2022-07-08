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

const chapters = defineEventHandler(async (event) => {
  const query = useQuery(event);
  const NET_TRUYEN_API = repositoryFactory(NET_TRUYEN);
  const { slug, chapter, id } = query;
  const chapters = await NET_TRUYEN_API.getChapters({
    slug,
    chapter,
    id
  });
  return chapters.data;
});

export { chapters as default };
//# sourceMappingURL=chapters.mjs.map
