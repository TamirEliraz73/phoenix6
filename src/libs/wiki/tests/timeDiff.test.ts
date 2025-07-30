test("", () => {
    const target: Date = new Date("2025-08-19T19:00:00.000Z");
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    // const seconds = Math.floor((total / 1000) % 60)
    // const minutes = Math.floor((total / 1000 / 60) % 60)
    // const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(days / 7);

    expect(weeks).toBe(2)

    // return { total, weeks, days, hours, minutes, seconds }
}
)