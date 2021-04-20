import {
  API_MAIN,
  API_KEY,
  API_YANDEX,
  API_NEWS,
  NEWS_SEARCH_DAYS,
} from './secret/secret.json';

class NewsApi {
  constructor() {
    this._MainUrl = API_MAIN;
    this._apiKey = API_KEY;
    this._yandexApi = API_YANDEX;
    this._newsApi = API_NEWS;
    this._newsDays = NEWS_SEARCH_DAYS;
  }

  _makeUrl(kWord) {
    const keyword = encodeURI(kWord);
    const now = new Date();
    const past = new Date();
    past.setDate(past.getDate() - this._newsDays);

    const uri = [
      `q=${keyword}`,
      `from=${past}`,
      `to=${now}`,
      'pageSize=10',
      `apiKey=${this._apiKey}`,
    ];

    return uri.join('&');
  }

  getArticles(term) {
    const searchUrl = this._newsApi;
    return fetch(searchUrl + this._makeUrl(term))
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`${res.status} : ${res.message}`));
      }).catch((res) => Promise.reject(new Error(`${res.status} : ${res.message}`)));
  }
}
const newsapi = new NewsApi();

export default newsapi;
