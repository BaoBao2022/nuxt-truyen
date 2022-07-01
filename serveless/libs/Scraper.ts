import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';

export default abstract class Scraper {
    baseURL: string;
    client: AxiosInstance;

    protected constructor(baseURL: string, axiosConfig?: AxiosRequestConfig, timeout?: number) {
        const config = {
            headers: {
                'referer': baseURL,
                'origin': baseURL,
                'Host': "www.nettruyenco.com",
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
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