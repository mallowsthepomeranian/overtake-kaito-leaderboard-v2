import { useEffect, useState } from "react";
import { fetchLeaderboard } from "../kaito";

export default function Leaderboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLeaderboard().then(res => setData(res?.data || []));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User ID</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.user_id}>
            <td>{e.rank}</td>
            <td>{e.user_id}</td>
            <td>{e.community_score.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
