"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  role: "user" | "ai"
  text: string
}

const initialMessages: Message[] = [
  { role: "user", text: "สรุปไฟในบ้าน" },
  {
    role: "ai",
    text: "จากการวิเคราะห์ 24 ชม. ที่ผ่านมา การใช้ไฟโดยรวมปกติดีครับ แต่มีข้อสังเกต: ไฟระเบียงชั้น 2 ถูกเปิดทิ้งคืน ซึ่งอาจไม่จำเป็นครับ",
  },
  { role: "user", text: "วิธีลดค่าไฟเดือนนี้" },
  {
    role: "ai",
    text: "แนะนำ 3 วิธีที่จะช่วยลดค่าไฟได้เร็วที่สุด:\n\n1. ตั้งแอร์ที่ 26°C (ประหยัดได้ ~8%)\n2. ใช้เครื่องใช้ไฟฟ้าหนักช่วง 11–14 น. (Solar peak)\n3. ปิดสแตนด์บายทุกคืน (~35 THB/เดือน)",
  },
]

const suggestions = [
  { icon: "📊", text: "รายงานเดือนนี้" },
  { icon: "🌿", text: "เป้า Carbon" },
  { icon: "💡", text: "เคล็ดลับ" },
]

export function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function sendMessage(text?: string) {
    const msg = text || input.trim()
    if (!msg) return
    setMessages((prev) => [
      ...prev,
      { role: "user", text: msg },
      {
        role: "ai",
        text: "ขอบคุณครับ กำลังวิเคราะห์ข้อมูลให้... สักครู่นะครับ 🔍",
      },
    ])
    setInput("")
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="text-center py-3 animate-fade-up">
        <p className="text-base font-bold" style={{ color: "#f1f5f9" }}>
          EnergySaver AI
        </p>
        <p className="text-[11px] flex items-center justify-center gap-1" style={{ color: "#64748b" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#22c55e" }} />
          Online – AI Assistant
        </p>
      </div>

      {/* Chat Bubbles */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto flex flex-col gap-3 px-1 pb-3"
        style={{ minHeight: 0 }}
      >
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex justify-end animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div
                className="max-w-[75%] px-4 py-2.5 text-xs leading-relaxed"
                style={{
                  background: "#7c3aed",
                  color: "#ffffff",
                  borderRadius: "18px 18px 4px 18px",
                }}
              >
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-start animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div
                className="max-w-[85%] px-4 py-3"
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px 18px 18px 4px",
                }}
              >
                <p className="text-[10px] font-bold mb-1.5" style={{ color: "#00e5ff" }}>
                  ⚡ PULSE AI
                </p>
                <p
                  className="text-xs leading-relaxed whitespace-pre-line"
                  style={{ color: "#f1f5f9" }}
                >
                  {msg.text}
                </p>
              </div>
            </div>
          )
        )}

        {/* Quick Suggestions */}
        <div className="flex flex-col items-center gap-2 mt-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span
            className="text-[10px] px-2.5 py-0.5 rounded-full"
            style={{ color: "#64748b", background: "rgba(255,255,255,0.04)" }}
          >
            ข้อเสนอแนะ
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <button
                key={s.text}
                onClick={() => sendMessage(`${s.icon} ${s.text}`)}
                className="text-[11px] px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(0,229,255,0.1)",
                  color: "#00e5ff",
                  border: "1px solid rgba(0,229,255,0.2)",
                }}
              >
                {s.icon} {s.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-2 pt-0">
        <div
          className="flex items-center gap-2 rounded-[14px] px-3 py-2"
          style={{
            background: "#1a2235",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 bg-transparent text-xs outline-none placeholder:opacity-40"
            style={{ color: "#f1f5f9" }}
          />
          <button
            onClick={() => sendMessage()}
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-opacity hover:opacity-80"
            style={{ background: "#7c3aed" }}
            aria-label="Send message"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
