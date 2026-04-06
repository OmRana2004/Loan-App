"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function CustomChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Welcome to MPS Finance!\nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userInput = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userInput },
    ]);

    setLoading(true);

    try {
      const res = await fetch(
        "https://omrana.app.n8n.cloud/webhook/fed0486f-e854-4142-8d09-29da20918ab0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chatInput: userInput }),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      let botReply =
        data?.output ||
        data?.response ||
        data?.text ||
        "⚠️ No response";

      botReply = botReply.replace(/\\n/g, "\n");

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: botReply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl text-xl"
      >
        💬
      </button>

      {/* Chat */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-112.5 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">

          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">MPS Assistant</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  {/* ✅ Markdown rendering */}
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        strong: ({ children }) => (
                          <span className="font-semibold">
                            {children}
                          </span>
                        ),
                        li: ({ children }) => (
                          <li className="ml-4 list-disc">
                            {children}
                          </li>
                        ),
                        p: ({ children }) => (
                          <p className="mb-1">{children}</p>
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div className="flex gap-1 text-gray-400 text-sm">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce delay-100">•</span>
                <span className="animate-bounce delay-200">•</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about loans..."
              className="flex-1 px-3 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-full disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}