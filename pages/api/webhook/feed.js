const { INLOOPWITH_API_KEY, DIGESTS_ENDPOINT } = process.env;
import axios from 'axios';

export default async (req, res) => {
    const API_KEY = req.headers['x-ilw-api-key'];
    if (INLOOPWITH_API_KEY !== API_KEY) {
        return res.status(401).send('Unauthorized');
    }
    const payload = req.body;
    console.log(payload);

    if (JSON.stringify(payload) === '{}') {
        return res.status(400).send({ error: 'Missing body' });
    }

    if (!payload.tag) {
        return res.status(400).send({ error: 'Missing tag' });
    }

    // store this payload to jsonbox collection accordingly
    if (payload.tag === 'product_hunt') {
        try {
            const responseData = await saveDigestToJsonBox('ph', payload);
            return res.json({ message: responseData.message || 'Digest added' });
        } catch (error) {
            console.log(error);
        }
    }

    if (payload.tag === 'hacker_news') {
        try {
            const responseData = await saveDigestToJsonBox('hn', payload);
            return res.json({ message: responseData.message || 'Digest added' });
        } catch (error) {
            console.log(error);
        }
    }
};

const saveDigestToJsonBox = async (category, payload) => {
    const response = await axios({
        method: 'post',
        url: `${DIGESTS_ENDPOINT}/${category}`,
        data: payload,
    });
    return response.data;
};
