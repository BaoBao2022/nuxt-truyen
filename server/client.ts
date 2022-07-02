import axios from 'axios';
import queryString from 'query-string';

const baseURL = `${process.env.NUXT_PUBLIC_SERVICE_URL}/api`;

const Client = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

export default Client;
