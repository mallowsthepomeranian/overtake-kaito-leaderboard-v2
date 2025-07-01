export default async function handler(req, res) {
  const url = "https://hub.kaito.ai/api/v1/gateway/ai/kol/mindshare/top-leaderboard?duration=7d&topic_id=OVERTAKE&top_n=1000&customized_community=customized&community_yaps=true";
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Kaito API" });
  }
}
