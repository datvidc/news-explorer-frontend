import moment from 'moment';

import {
  API_MAIN,
  API_KEY,
  API_YANDEX,
  API_NEWS,
} from './secret/secret.json';

class NewsApi {
  constructor() {
    this._MainUrl = API_MAIN;
    this._apiKey = API_KEY;
    this._yandexApi = API_YANDEX;
    this._newsApi = API_NEWS;
  }

  _makeUrl(kWord) {
    const keyword = encodeURI(kWord);
    const now = moment().format('YYYY-MM-DD');
    const past = moment().subtract(5, 'days').format('YYYY-MM-DD');

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
      }).catch((res) => {
        console.log(res);
        return Promise.reject(new Error(`${res.status} : ${res.message}`));
      });
  }
}
const newsapi = new NewsApi();

export default newsapi;
