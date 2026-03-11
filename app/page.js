export default function Home() {
  return (
    <main style={{fontFamily:"Arial", padding:"40px"}}>
      <h1>SporkPicks</h1>
      <p>Advanced NHL analytics, lineup intelligence, and pick tracking.</p>

      <h2>What SporkPicks Does</h2>

      <ul>
        <li>📊 Live odds tracking</li>
        <li>📈 Edge scoring for picks</li>
        <li>🏒 Automated lineup monitoring</li>
        <li>📉 Pick tracking dashboard</li>
      </ul>

      <a href="/dashboard">
        <button style={{padding:"10px 20px", marginTop:"20px"}}>
          Open Dashboard
        </button>
      </a>
    </main>
  );
}
