export async function fetchLeaderboard() {
  const url = "https://hub.kaito.ai/api/v1/gateway/ai/kol/mindshare/top-leaderboard?duration=7d&topic_id=OVERTAKE&top_n=1000&customized_community=customized&community_yaps=true";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
