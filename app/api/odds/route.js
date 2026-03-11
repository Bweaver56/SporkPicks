export async function GET() {

  const res = await fetch(
    `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&markets=h2h&apiKey=${process.env.ODDS_API_KEY}`
  )

  const data = await res.json()

  return Response.json(data)

}
