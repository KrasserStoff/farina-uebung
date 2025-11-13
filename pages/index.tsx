import { useState } from "react";
import MessageForm from "../components/MessageForm";

export default function Home() {
  const [response, setResponse] = useState<string>("");

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React + TypeScript + Next.js Test</h1>
      <p>Enter a message below and submit to the server:</p>
      <MessageForm onResponse={setResponse} />
      {response && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <strong>Server Response:</strong> {response}
        </div>
      )}
    </main>
  );
}