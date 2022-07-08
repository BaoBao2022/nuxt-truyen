import { defineEventHandler, useQuery } from 'h3';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { v as vue_cjs_prod } from './vue.cjs.prod.mjs';
import 'unenv/runtime/mock/proxy';

class Scraper {
  constructor(baseURL, axiosConfig, timeout) {
    const config = {
      headers: {
        referer: baseURL,
        origin: baseURL
      },
      timeout: timeout | 1e5,
      ...axiosConfig
    };
    this.baseURL = baseURL;
    this.client = axios.create(config);
  }
  unshiftProtocol(urlSrc) {
    const protocols = ["http", "https"];
    return protocols.some((protocol) => urlSrc.includes(protocol)) ? urlSrc : `https:${urlSrc}`;
  }
}

const normalizeString = (str) => {
  const htmlTagsRegex = /(&nbsp;|<([^>]+)>)/g;
  return str.trim().replace(/(\r\n|\n|\r|\")/gm, "").replace(htmlTagsRegex, "");
};

const comicDefaultResponse = {
  title: "",
  updatedAt: "",
  otherName: "",
  author: "",
  status: "",
  genres: "",
  view: "",
  review: "",
  chapterList: ""
};
class MangaModel extends Scraper {
  constructor(baseURL, axiosConfig, timeout) {
    super(baseURL, axiosConfig, timeout);
  }
  static getInstance(baseURL, axiosConfig, timeout) {
    if (!this.instance) {
      this.instance = new this(baseURL, axiosConfig, timeout);
    }
    return this.instance;
  }
  async getComic(mangaSlug) {
    var _a, _b, _c, _d, _e;
    const baseSlug = "truyen-tranh";
    try {
      const { data } = await this.client.get(`${this.baseURL}/${baseSlug}/${mangaSlug}`);
      const document = parse(data);
      const rootSelector = "#item-detail";
      const title = normalizeString(String((_a = document.querySelector(`${rootSelector} h1`)) == null ? void 0 : _a.textContent));
      const updatedAt = normalizeString(String((_b = document.querySelector(`${rootSelector} time`)) == null ? void 0 : _b.textContent));
      const otherName = normalizeString(String((_c = document.querySelector(`${rootSelector} .detail-info .other-name`)) == null ? void 0 : _c.textContent));
      const author = normalizeString(String(document.querySelectorAll(`${rootSelector} .detail-info .author p`)[1].textContent));
      const status = normalizeString(String(document.querySelectorAll(`${rootSelector} .detail-info .status p`)[1].textContent));
      const genresArrayRaw = document.querySelectorAll(`${rootSelector} .kind p`)[1].querySelectorAll("a");
      const genres = [...genresArrayRaw].map((genre) => {
        const genreTitle = normalizeString(String(genre.textContent));
        const hrefString = String(genre.getAttribute("href"));
        const slug = hrefString.substring(hrefString.lastIndexOf("/") + 1);
        return { genreTitle, slug };
      });
      const lastChildUl = document.querySelectorAll(`${rootSelector} .detail-info .list-info .row`);
      const view = normalizeString(String(lastChildUl[lastChildUl.length - 1].querySelectorAll("p")[1].textContent));
      const review = normalizeString(String((_d = document.querySelector(`${rootSelector} .detail-content p`)) == null ? void 0 : _d.textContent));
      const chapterListRaw = document.querySelectorAll(`${rootSelector} #nt_listchapter ul .row`);
      const chapterList = [...chapterListRaw].map((chapter) => {
        var _a2, _b2, _c2;
        const chapterTitle = normalizeString(String((_a2 = chapter.querySelector("a")) == null ? void 0 : _a2.textContent));
        const chapterId = (_b2 = chapter.querySelector("a")) == null ? void 0 : _b2.getAttribute("data-id");
        const arr = String((_c2 = chapter.querySelector("a")) == null ? void 0 : _c2.getAttribute("href")).split("/");
        const chapterStr = arr[arr.length - 2];
        const chapterNumber = chapterStr.slice(chapterStr.indexOf("-") + 1);
        const updatedAt2 = normalizeString(String(chapter.querySelectorAll("div")[1].textContent));
        const view2 = normalizeString(String(chapter.querySelectorAll("div")[2].textContent));
        return {
          chapterId,
          chapterNumber,
          chapterTitle,
          updatedAt: updatedAt2,
          view: view2
        };
      });
      const thumbnail = super.unshiftProtocol(String((_e = document.querySelector(`${rootSelector} .col-image img`)) == null ? void 0 : _e.getAttribute("src")));
      return {
        title,
        updatedAt,
        thumbnail,
        otherName,
        author,
        status,
        genres,
        view,
        review,
        chapterList
      };
    } catch (error) {
      console.log("error", error);
      return comicDefaultResponse;
    }
  }
}

const SourceCollection = {
  nt: "http://www.nettruyenco.com"
};
const SourceParams = {
  netTruyen: "nt"
};

const comic = defineEventHandler(async (event) => {
  const query = useQuery(event);
  const { slug, source } = vue_cjs_prod.reactive(query);
  let model;
  switch (source) {
    case SourceParams.netTruyen:
      model = MangaModel.getInstance(SourceCollection[source]);
      break;
  }
  const comic = await model.getComic(slug);
  return comic;
});

export { comic as default };
//# sourceMappingURL=comic.mjs.map
