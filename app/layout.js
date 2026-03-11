export const metadata = {
  title: "SporkPicks",
  description: "NHL analytics, odds tracking, and pick intelligence"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"Arial, sans-serif"}}>

        {/* Navigation */}
        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"15px 30px",
          background:"#111",
          color:"#fff"
        }}>
          <h2>SporkPicks</h2>

          <div>
            <a href="/" style={{color:"#fff",marginRight:"20px"}}>Home</a>
            <a href="/dashboard" style={{color:"#fff",marginRight:"20px"}}>Dashboard</a>
            <button style={{
              padding:"8px 14px",
              border:"none",
              background:"#22c55e",
              color:"#fff",
              borderRadius:"6px"
            }}>
              Login
            </button>
          </div>
        </nav>

        {/* Page Content */}
        <div style={{padding:"40px"}}>
          {children}
        </div>

      </body>
    </html>
  )
}
