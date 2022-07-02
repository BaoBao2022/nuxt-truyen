import axios from 'axios';
import queryString from 'query-string';

const baseURL = `https://f88b-8-34-202-82.ap.ngrok.io/api`;
const Client = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

export default Client;
