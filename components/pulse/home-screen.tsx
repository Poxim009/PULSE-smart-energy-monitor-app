"use client"

export function HomeScreen() {
  const devices = [
    { icon: "❄️", name: "Air Conditioner", color: "#00e5ff", watts: 1200, barWidth: 85 },
    { icon: "🧊", name: "Refrigerator", color: "#fbbf24", watts: 150, barWidth: 12 },
    { icon: "📺", name: "Smart TV", color: "#a78bfa", watts: 80, barWidth: 6 },
    { icon: "💻", name: "Laptop", color: "#22c55e", watts: 50, barWidth: 4 },
  ]

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-1 pt-2 pb-1">
        <span className="text-xs" style={{ color: "#f1f5f9" }}>9:41</span>
        <span className="text-base font-bold" style={{ color: "#00e5ff" }}>
          ⚡ PULSE
        </span>
        <span className="text-xs" style={{ color: "#f1f5f9" }}>●●● 100%</span>
      </div>

      {/* Welcome Hero Card */}
      <div
        className="rounded-[20px] p-5 relative overflow-hidden animate-fade-up"
        style={{
          background: "linear-gradient(135deg, #0f3460 0%, #162040 100%)",
          border: "1px solid rgba(0,229,255,0.15)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top right, rgba(0,229,255,0.15), transparent 70%)",
          }}
        />
        <p className="text-xs mb-2" style={{ color: "#64748b" }}>
          Welcome Home! 🏠
        </p>
        <div className="flex items-baseline gap-1 mb-1">
          <span
            className="text-[44px] font-extrabold leading-none"
            style={{ color: "#00e5ff" }}
          >
            2.3
          </span>
          <span className="text-lg" style={{ color: "#64748b" }}>
            kW
          </span>
        </div>
        <p className="text-xs mb-3" style={{ color: "#64748b" }}>
          กำลังใช้งานปัจจุบัน
        </p>
        <div className="flex gap-3">
          <MetaPill dotColor="#fbbf24" text="Solar 1.8 kW" />
          <MetaPill dotColor="#22c55e" text="152 THB/วัน" />
          <MetaPill dotColor="#00e5ff" text="CO₂ 3.2 kg" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <StatCard emoji="☀️" value="1.8" valueColor="#fbbf24" label="Solar kW" />
        <StatCard emoji="💰" value="152" valueColor="#22c55e" label="THB วันนี้" />
        <StatCard emoji="🌿" value="3.2" valueColor="#00e5ff" label="kg CO₂" />
      </div>

      {/* Section Header */}
      <div
        className="flex items-center justify-between px-1 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <span className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>
          🔌 Active Devices
        </span>
        <span className="text-[11px]" style={{ color: "#00e5ff" }}>
          ดูทั้งหมด →
        </span>
      </div>

      {/* Device List */}
      <div className="flex flex-col gap-2.5">
        {devices.map((device, i) => (
          <div
            key={device.name}
            className="flex items-center gap-3 rounded-[14px] px-3.5 py-3 animate-fade-up"
            style={{
              background: "#1a2235",
              border: "1px solid rgba(255,255,255,0.07)",
              animationDelay: `${0.25 + i * 0.07}s`,
            }}
          >
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base shrink-0"
              style={{ background: `${device.color}1a` }}
            >
              {device.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold mb-1.5" style={{ color: "#f1f5f9" }}>
                {device.name}
              </p>
              <div
                className="h-[3px] rounded-full w-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${device.barWidth}%`,
                    background: device.color,
                  }}
                />
              </div>
            </div>
            <span className="text-[13px] font-bold shrink-0" style={{ color: "#00e5ff" }}>
              {device.watts} W
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MetaPill({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: dotColor }} />
      <span className="text-[11px]" style={{ color: "#f1f5f9" }}>{text}</span>
    </div>
  )
}

function StatCard({
  emoji,
  value,
  valueColor,
  label,
}: {
  emoji: string
  value: string
  valueColor: string
  label: string
}) {
  return (
    <div
      className="rounded-2xl p-3 flex flex-col items-center gap-1"
      style={{
        background: "#1a2235",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span className="text-xl">{emoji}</span>
      <span className="text-lg font-extrabold" style={{ color: valueColor }}>
        {value}
      </span>
      <span className="text-[10px]" style={{ color: "#64748b" }}>
        {label}
      </span>
    </div>
  )
}
