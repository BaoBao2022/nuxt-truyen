import axios from 'axios';
import queryString from 'query-string';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';

const config = useRuntimeConfig();
const baseURL = config.public.NUXT_PUBLIC_SERVICE_URL + "/api";
const Client = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json"
  },
  paramsSerializer: (params) => queryString.stringify(params)
});
const client = Client;

const SOURCE_PREFIX = "nt";
const netTruyenAPI = {
  advancedSearch: (req) => {
    return client.get(`${SOURCE_PREFIX}/advanced-search`, {
      params: req
    });
  },
  filter: (req) => {
    return client.get(`${SOURCE_PREFIX}/filters`, {
      params: {
        page: req.page ? req.page : void 0,
        genres: req.genres ? req.genres : void 0,
        top: req.top ? req.top : void 0,
        status: req.status ? req.status : void 0
      }
    });
  },
  search: async (mangaTitle) => {
    return client.get(`${SOURCE_PREFIX}/search`, {
      params: { q: mangaTitle }
    });
  },
  getManga: (slug) => {
    return client.get(`${SOURCE_PREFIX}/manga/${slug}`);
  },
  getChapters(req) {
    const url = `${SOURCE_PREFIX}/chapter/${req.slug}/${req.chapter}/${req.id}`;
    return client.get(url);
  },
  getNewMangaUpdated(page) {
    return client.get(`${SOURCE_PREFIX}/new-updated`, {
      params: { page: page ? page : void 0 }
    });
  },
  getNewManga(page, genres) {
    return client.get(`${SOURCE_PREFIX}/new`, {
      params: {
        page: page ? page : void 0,
        genres: genres ? genres : void 0
      }
    });
  },
  getMangaRanking(req) {
    return client.get(`${SOURCE_PREFIX}/ranking`, {
      params: {
        page: req.page ? req.page : void 0,
        top: req.top ? req.top : void 0,
        status: req.status ? req.status : void 0,
        genres: req.genre ? req.genre : void 0
      }
    });
  }
};
const NetTruyenRepository = netTruyenAPI;

const NET_TRUYEN = "nettruyen";
function repositoryFactory(name) {
  switch (name) {
    case NET_TRUYEN:
      return NetTruyenRepository;
    default:
      return null;
  }
}

export { NET_TRUYEN as N, repositoryFactory as r };
//# sourceMappingURL=repositoryFactory.mjs.map
