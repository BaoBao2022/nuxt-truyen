import axios from 'axios';

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const {src, url} = query;

    const options = {
        responseType: 'stream',
        headers: {
            referer: String(url),
        },
    } as const;

    const response = await axios.get(String(src), options);

    return response.data.pipe(event.res);
});