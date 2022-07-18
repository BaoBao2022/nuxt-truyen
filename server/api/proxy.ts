import axios from 'axios';

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const {src, url} = query;

    const options = {
        responseType: 'stream',
        headers: {
            referer: String(url),
        },
    } as any;

    const response = await axios.get(String(src), options);

    response.data.pipe(event.res);
});