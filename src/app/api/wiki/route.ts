import { NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');

    if (!page) {
        return new Response(JSON.stringify({ error: 'Missing page parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'parse',
                page,
                prop: 'wikitext',
                format: 'json',
                origin: '*',
                redirects: 1,
            },
        });

        const wikitext = response.data?.parse?.wikitext?.['*'];

        return new Response(JSON.stringify({ wikitext: wikitext || null }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Failed to fetch from Wikipedia:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch from Wikipedia' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
