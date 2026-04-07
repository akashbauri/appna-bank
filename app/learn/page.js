import Navbar from "../../components/Navbar";

export default function Learn() {
  return (
    <>
      <Navbar />

      <div style={container}>
        <h2>📚 Learn About Loans</h2>

        <div style={card}>
          <h3>What is a Loan?</h3>
          <p>A loan is money borrowed that must be repaid with interest.</p>
        </div>

        <div style={card}>
          <h3>Credit Score</h3>
          <p>Your credit score determines your loan eligibility.</p>
        </div>

        <div style={card}>
          <h3>Interest Rate</h3>
          <p>It is the cost of borrowing money.</p>
        </div>
      </div>
    </>
  );
}

const container = {
  padding: "40px",
  textAlign: "center"
};

const card = {
  background: "#f4f4f4",
  padding: "20px",
  margin: "10px auto",
  width: "300px",
  borderRadius: "10px"
};
