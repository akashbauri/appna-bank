"use client";

import Link from "next/link";
import { useState } from "react";
import { auth, provider } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const res = await signInWithPopup(auth, provider);
    setUser(res.user);
  };

  return (
    <nav style={nav}>
      <h2 style={{ margin: 0 }}>🚀 APPNA BANK</h2>

      <div style={menu}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/loan">Loan</Link>
        <Link href="/ai-chat">AI Chat</Link>
        <Link href="/learn">Learn</Link>
      </div>

      {user ? (
        <button style={btn} onClick={() => signOut(auth)}>Logout</button>
      ) : (
        <button style={btn} onClick={login}>Login</button>
      )}
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#000",
  color: "white"
};

const menu = {
  display: "flex",
  gap: "20px"
};

const btn = {
  padding: "8px 15px",
  borderRadius: "6px",
  border: "none",
  background: "#fff",
  cursor: "pointer"
};
