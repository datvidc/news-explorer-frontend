import {
  API_MAIN,
  API_KEY,
  API_YANDEX,
  API_NEWS,
} from './secret/secret.json';

class Api {
  constructor() {
    this._MainUrl = API_MAIN;
    this._apiKey = API_KEY;
    this._yandexApi = API_YANDEX;
    this._newsApi = API_NEWS;
  }

  signIn(email, password) {
    console.log(email);
    console.log(password);
    const userUrl = this._MainUrl.concat('/signin');
    return fetch(userUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        console.log(data);
        if (!data.message) {
          localStorage.setItem('jwt', data.token);
        }
        return data;
      })
      .catch((res) => {
        console.log(res);
      });
  }

  getCurrentUser(token) {
    const userUrl = this._MainUrl.concat('/users/me');
    return fetch(userUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`${res.status} : ${res.message}`));
      }).catch((res) => {
        console.log(res);
      });
  }

  signup(email, password, name) {
    const userUrl = this._MainUrl.concat('/signup');
    return fetch(userUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
  }
}

const api = new Api('http://api.nomad.students.nomoreparties.site');

export default api;
