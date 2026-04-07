import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={main}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          🚀 APPNA BANK
        </h1>

        <p style={{ marginBottom: "30px" }}>
          AI-powered loan platform
        </p>

        <div style={grid}>

          <Link href="/dashboard">
            <button
              style={btn}
              onMouseOver={(e) => (e.target.style.background = "#ddd")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              📊 Dashboard
            </button>
          </Link>

          <Link href="/loan">
            <button
              style={btn}
              onMouseOver={(e) => (e.target.style.background = "#ddd")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              💰 Apply Loan
            </button>
          </Link>

          <Link href="/ai-chat">
            <button
              style={btn}
              onMouseOver={(e) => (e.target.style.background = "#ddd")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              🤖 AI Chat
            </button>
          </Link>

          <Link href="/learn">
            <button
              style={btn}
              onMouseOver={(e) => (e.target.style.background = "#ddd")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              📚 Learn
            </button>
          </Link>

        </div>
      </main>
    </>
  );
}

const main = {
  height: "100vh",
  background: "linear-gradient(135deg,#667eea,#764ba2)",
  color: "white",
  textAlign: "center",
  paddingTop: "120px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,200px)",
  gap: "20px",
  justifyContent: "center"
};

const btn = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  background: "white"
};
