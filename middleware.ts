// middleware.ts
import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

/**
 * Middleware to ensure a 'locale' cookie is set on every request.
 * If no 'locale' cookie is present, sets it to default 'en'.
 */
export function middleware(request: NextRequest): NextResponse {
    const locale = request.cookies.get('locale') || 'en'

    const response = NextResponse.next()

    if (!request.cookies.get('locale')) {
        // Set cookie on root path with default locale
        // @ts-ignore: NextResponse.cookies typings sometimes incomplete
        response.cookies.set('locale', locale, { path: '/' })
    }

    return response
}

/**
 * Configures middleware to run on all paths.
 */
export const config = {
    matcher: '/:path*',
}
