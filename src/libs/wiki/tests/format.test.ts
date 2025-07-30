test("Check WikiDate parseMatchDateTime()", () => {
    // const d = parseMatchDateTime('19 August 2025','{{UTZ|20:30|2}}')
    const timeStr = '{{UTZ|20:30|2}}'
    const dateStr = '19 August 2025'
    let time = '';
    let offset = 0; // Default to 0, meaning UTC if no offset found

    // Try to parse {{UTZ|HH:MM|offset}}
    const utzMatch = timeStr.match(/\{\{UTZ\|(\d{2}:\d{2})\|(-?\d+)\}\}/);
    if (utzMatch) {
        time = utzMatch[1];
        offset = parseInt(utzMatch[2], 10);
        expect(time).toBe('20:30')
        expect(offset).toBe(2)
    } else {
        expect(1).toBe(2); // false
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
        expect(1).toBe(2); // false
        return new Date('Invalid Date');
    }

    // Construct a date string that Date.parse can understand, including the UTC offset
    // Example: "19 August 2025 21:00 GMT+02:00"
    const combinedDateTimeStr = `${dateStr} ${time} GMT${offset >= 0 ? '+' : ''}${String(offset).padStart(2, '0')}:00`;

    expect(combinedDateTimeStr).toBe('19 August 2025 20:30 GMT+02:00');
    // Attempt to parse with Date constructor. This will automatically adjust to the local timezone
    // based on the provided GMT offset.
    const date = new Date(combinedDateTimeStr);
    console.log(date.toLocaleTimeString());

    //return date;
})