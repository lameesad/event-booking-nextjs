export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-b9b73-default-rtdb.firebaseio.com/events.json')
    // firebase return data as an object
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}