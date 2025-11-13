import { useRef, useState } from "react";

interface MessageFormProps {
  onResponse: (msg: string) => void;
}

export default function MessageForm({ onResponse }: MessageFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Get the input value from useRef
    // TODO: Send it via fetch() to /api/process
    // TODO: Handle response and update parent via onResponse
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Send"}
      </button>
    </form>
  );
}