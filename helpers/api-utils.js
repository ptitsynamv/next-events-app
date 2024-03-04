export async function getAllEvents() {
  const response = await fetch('http://localhost:3001/events');
  const data = response.json();

  return data;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((item) => item.isFeatured);
}
