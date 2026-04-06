export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <div style={{ display: "grid", gap: 10 }}>
        <a href="/loan"><button>Check Loan Eligibility</button></a>
        <a href="/learn"><button>Increase Loan Limit</button></a>
        <a href="/ai-chat"><button>Ask AI</button></a>
        <a href="/schemes"><button>Grow Your Money</button></a>
      </div>
    </div>
  );
}
