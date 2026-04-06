export default function Dashboard() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <div className="grid gap-4">
        <a href="/loan" className="bg-green-500 text-white p-4 rounded-xl">
          Check Loan Eligibility
        </a>

        <a href="/learn" className="bg-blue-500 text-white p-4 rounded-xl">
          Increase Loan Limit
        </a>

        <a href="/ai-chat" className="bg-purple-500 text-white p-4 rounded-xl">
          Ask AI
        </a>

        <a href="/schemes" className="bg-yellow-500 text-white p-4 rounded-xl">
          Grow Your Money
        </a>
      </div>
    </div>
  );
}
