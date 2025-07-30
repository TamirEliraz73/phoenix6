/**
 * Parses the date and time strings from Wikipedia and returns a Date object.
 * It handles both {{UTZ|HH:MM|offset}} and HH:MM [[Timezone|TZ]] ([[UTC+offset|UTC+offset]]) formats.
 * @param dateStr The date string (e.g., "19 August 2025").
 * @param timeStr The time string (e.g., "{{UTZ|21:00|2}}" or "19:30 [[Central European Summer Time|CEST]] ([[UTC+02:00|UTC+2]])").
 * @returns A Date object in UTC, or an invalid Date if parsing fails.
*/
export function parseMatchDateTime(dateStr: string, timeStr: string): Date {
    let time = '';
    let offset = 0; // Default to 0, meaning UTC if no offset found

    // Try to parse {{UTZ|HH:MM|offset}}
    const utzMatch = timeStr.match(/\{\{UTZ\|(\d{2}:\d{2})\|(-?\d+)\}\}/);
    if (utzMatch) {
        time = utzMatch[1];
        offset = parseInt(utzMatch[2], 10);
    } else {
        // Try to parse HH:MM ... ([[UTC+offset|UTC+offset]])
        const generalTimeMatch = timeStr.match(/(\d{2}:\d{2}).*?UTC([+-]?\d{1,2})/i);
        if (generalTimeMatch) {
            time = generalTimeMatch[1];
            offset = parseInt(generalTimeMatch[2], 10);
        } else {
            // Fallback for cases where only time is present without offset or complex format
            const simpleTimeMatch = timeStr.match(/(\d{2}:\d{2})/);
            if (simpleTimeMatch) {
                time = simpleTimeMatch[1];
            }
        }
    }

    if (!time || !dateStr) {
        return new Date('Invalid Date');
    }

    // Construct a date string that Date.parse can understand, including the UTC offset
    // Example: "19 August 2025 21:00 GMT+02:00"
    const combinedDateTimeStr = `${dateStr} ${time} GMT${offset >= 0 ? '+' : ''}${String(offset).padStart(2, '0')}:00`;

    // Attempt to parse with Date constructor. This will automatically adjust to the local timezone
    // based on the provided GMT offset.
    const date = new Date(combinedDateTimeStr);

    return date;
}