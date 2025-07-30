import { NextRequest } from 'next/server'
import { type MatchStats } from '../MatchStats'
import axios from 'axios'
import { parseMatchDateTime } from '@/libs/wiki/WikiDate'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page')
    const section = searchParams.get('section')

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
                section: section ?? undefined,
                redirects: 1,
            },
        })

        const rawText: string = response.data?.parse?.wikitext?.['*'] || ''

        // --- CHANGE THIS LINE ---
        // Use a case-insensitive regular expression to split by either 'Football box collapsible' or 'footballbox collapsible'
        const boxes = rawText.split(/\{\{[Ff]ootball ?box collapsible/i).slice(1)
        // ------------------------
        if (boxes.length === 0) {
            return new Response(JSON.stringify({ message: 'No match ever found (debug)' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        const matches = boxes.map(box => {
            const fields: Record<string, string> = {}
            const lines = box.split('\n|').map(line => line.trim())
            for (const line of lines) {
                const match = line.match(/^(\w+)\s*=\s*(.+)$/)
                if (match) {
                    fields[match[1]] = match[2]//.replace(/}}$/, '').trim()
                }
            }
            return fields
        })

        //const next = matches[0]
        // const next = matches.find(isMatchUpcoming)
        // Find the first match where the 'result' field is empty or consists only of whitespace
        const next = matches.find(match => !match.result || match.result.trim() === '' || match.result.trim() === '}}')

        // console.log(next)

        if (!next) {
            console.error("Could not find the next match");
            console.error(matches[0])
            return new Response(JSON.stringify({ message: 'No upcoming match found (out of ' + boxes.length + ' options)' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        const cleanDateStr = extractPlainText(next.date || '');
        const timeStr = extractPlainText(next.time || '');
        const parsedDate = parseMatchDateTime(cleanDateStr, timeStr);

        // console.log("ParsesDate === " + parsedDate);

        const result: MatchStats = {
            round: next.round,
            parsedDate: parsedDate,
            date: parsedDate.toLocaleDateString(),
            time: parsedDate.toLocaleTimeString(),
            team1: extractPlainText(next.team1),
            team2: extractPlainText(next.team2),
        }
        // console.log(result)

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

// Utility: clean [[link|label]] or [[label]]
function extractPlainText(text?: string): string {
    if (!text) return ''
    return text
        .replace(/\[\[.*?\|(.*?)\]\]/g, '$1') // [[a|b]] => b
        .replace(/\[\[(.*?)\]\]/g, '$1')     // [[a]] => a
        .replace(/\]\]/g, '')                // leftover ]] in bad formats
        .replace(/\[\[/g, '')                // leftover [[ in bad formats
        .trim()
}