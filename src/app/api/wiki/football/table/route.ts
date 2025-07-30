import { NextRequest } from 'next/server'
import axios from 'axios'
import type { Result } from '@/app/api/wiki/football'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page')

    if (!page) {
        return new Response(JSON.stringify({ error: 'Missing page parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        })
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
        })

        const rawText: string = response.data?.parse?.wikitext?.['*'] || ''
        const lines = rawText.split('\n').map(line => line.trim())

        const result: Result = {
            teams: [],
        }

        const regex = /\|win_([A-ZÄÅÖ]{2,4})\s*=\s*(\d+)\s*\|draw_[A-ZÄÅÖ]{2,4}\s*=\s*(\d+)\s*\|loss_[A-ZÄÅÖ]{2,4}\s*=\s*(\d+)\s*\|gf_[A-ZÄÅÖ]{2,4}\s*=\s*(\d+)\s*\|ga_[A-ZÄÅÖ]{2,4}\s*=\s*(\d+)/

        for (const line of lines) {
            if (line.startsWith('|update=')) {
                result.updatedAt = line.replace('|update=', '').trim()
            } else if (line.startsWith('|win_')) {
                const match = line.match(regex)
                if (match) {
                    const [_, team, win, draw, loss, gf, ga] = match
                    result.teams.push({
                        team,
                        win: parseInt(win, 10),
                        draw: parseInt(draw, 10),
                        loss: parseInt(loss, 10),
                        gf: parseInt(gf, 10),
                        ga: parseInt(ga, 10),
                    })
                }
            }
        }

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })

    } catch (error) {
        console.error('Failed to fetch or parse Wikipedia:', error)
        return new Response(JSON.stringify({ error: 'Failed to fetch or parse Wikipedia' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
