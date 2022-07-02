import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';

export default abstract class Scraper {
    baseURL: string;
    client: AxiosInstance;

    protected constructor(baseURL: string, axiosConfig?: AxiosRequestConfig, timeout?: number) {
        const config = {
            headers: {
                referer: baseURL,
                origin: baseURL,
            },
            timeout: timeout | 100000,
            ...axiosConfig
        }

        this.baseURL = baseURL;
        this.client = axios.create(config);
    }

    public unshiftProtocol(urlSrc: string) {
        const protocols = ['http', 'https'];
        return protocols.some((protocol) => urlSrc.includes(protocol))
            ? urlSrc
            : `https:${urlSrc}`;
    }
}