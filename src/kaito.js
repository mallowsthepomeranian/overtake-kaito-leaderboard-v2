export async function fetchLeaderboard() {
  const url = "/api/kaito"; // fetches from your own backend
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    return null;
  }
}
