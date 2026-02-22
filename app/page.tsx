"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/pulse/home-screen"
import { UsageScreen } from "@/components/pulse/usage-screen"
import { AlertsScreen } from "@/components/pulse/alerts-screen"
import { ChatScreen } from "@/components/pulse/chat-screen"

const tabs = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "usage", label: "Usage", icon: ChartIcon },
  { id: "alerts", label: "Alerts", icon: BellIcon },
  { id: "chat", label: "AI Chat", icon: BotIcon },
] as const

type TabId = (typeof tabs)[number]["id"]

export default function PulsePage() {
  const [activeTab, setActiveTab] = useState<TabId>("home")

  return (
    <div
      className="relative mx-auto flex flex-col overflow-hidden"
      style={{
        maxWidth: 430,
        height: "100dvh",
        background: "#0a0f1e",
      }}
    >
      {/* Background gradient overlays */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(0,229,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.08) 0%, transparent 50%)",
          maxWidth: 430,
          margin: "0 auto",
        }}
      />

      {/* Screen Content */}
      <main
        className="flex-1 overflow-y-auto relative z-10 px-4"
        style={{ paddingBottom: 90 }}
      >
        {activeTab === "home" && <HomeScreen />}
        {activeTab === "usage" && <UsageScreen />}
        {activeTab === "alerts" && <AlertsScreen />}
        {activeTab === "chat" && <ChatScreen />}
      </main>

      {/* Bottom Navigation */}
      <nav
        className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4"
        style={{ background: "linear-gradient(to top, #0a0f1e 60%, transparent)" }}
      >
        <div
          className="flex items-center justify-around rounded-[20px] py-2"
          style={{
            background: "#1a2235",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex flex-col items-center gap-0.5 py-1 px-3 transition-colors"
                style={{ color: isActive ? "#00e5ff" : "#64748b" }}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function BotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  )
}
