"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function AIChat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ msg })
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button onClick={send}>Send</button>
        <p>{reply}</p>
      </div>
    </>
  );
}
