"use client"

import { useState } from "react"

const barData = [
  { day: "จ.", value: 25, height: 25, opacity: 0.3 },
  { day: "อ.", value: 35, height: 32, opacity: 0.3 },
  { day: "พ.", value: 60, height: 55, opacity: 0.4 },
  { day: "พฤ.", value: 75, height: 68, opacity: 0.5 },
  { day: "ศ.", value: 95, height: 86, opacity: 0.7 },
  { day: "ส.", value: 110, height: 100, opacity: 1.0 },
  { day: "อา.", value: 65, height: 59, opacity: 0.45 },
]

const breakdownItems = [
  { icon: "⚡", label: "ใช้งานปกติสูงสุด", value: "25 kWh" },
  { icon: "🛏", label: "ห้องนอน", value: "4 kWh" },
  { icon: "❄️", label: "เครื่องใช้ไฟฟ้าขนาดใหญ่", value: "18 kWh" },
  { icon: "💡", label: "แสงสว่าง", value: "6 kWh" },
]

export function UsageScreen() {
  const [period, setPeriod] = useState("สัปดาห์")
  const periods = ["วัน", "สัปดาห์", "เดือน"]

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header */}
      <div className="pt-3 px-1 animate-fade-up">
        <h1 className="text-lg font-bold" style={{ color: "#f1f5f9" }}>
          ประวัติการใช้งาน
        </h1>
      </div>

      {/* Period Toggle */}
      <div
        className="flex rounded-xl p-1 animate-fade-up"
        style={{
          background: "rgba(255,255,255,0.04)",
          animationDelay: "0.05s",
        }}
      >
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className="flex-1 py-2 rounded-[10px] text-xs font-medium transition-all"
            style={{
              background: period === p ? "#7c3aed" : "transparent",
              color: period === p ? "#ffffff" : "#64748b",
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Bar Chart Card */}
      <div
        className="rounded-[20px] p-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          animationDelay: "0.1s",
        }}
      >
        <p className="text-xs font-semibold mb-4" style={{ color: "#f1f5f9" }}>
          การใช้ไฟฟ้า (kWh)
        </p>
        <div className="flex items-end justify-between gap-1" style={{ height: 110 }}>
          {barData.map((bar, i) => (
            <div key={bar.day} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[9px] font-medium" style={{ color: "#64748b" }}>
                {bar.value}
              </span>
              <div
                className="w-full rounded-t-[6px] animate-grow-bar"
                style={{
                  height: `${bar.height}%`,
                  background:
                    bar.opacity === 1
                      ? "#00e5ff"
                      : `rgba(0,229,255,${bar.opacity})`,
                  animationDelay: `${0.15 + i * 0.08}s`,
                  minHeight: 4,
                }}
              />
              <span className="text-[9px]" style={{ color: "#64748b" }}>
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Summary Card */}
      <div
        className="rounded-[20px] p-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          animationDelay: "0.2s",
        }}
      >
        <p className="text-xs mb-3" style={{ color: "#64748b" }}>
          รายละเอียดของวัน พฤ.
        </p>
        <div className="flex flex-col gap-2.5">
          {breakdownItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "#f1f5f9" }}>
                {item.icon} {item.label}
              </span>
              <span className="text-xs font-semibold" style={{ color: "#f1f5f9" }}>
                {item.value}
              </span>
            </div>
          ))}
          <div className="h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "#f1f5f9" }}>
              ☀️ พลังงานแสงอาทิตย์
            </span>
            <span className="text-xs font-bold" style={{ color: "#fbbf24" }}>
              −7 kWh
            </span>
          </div>
        </div>
      </div>

      {/* Carbon Footprint Card */}
      <div
        className="rounded-[20px] p-4 flex items-center gap-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          animationDelay: "0.3s",
        }}
      >
        {/* Circular Ring Chart */}
        <div className="shrink-0 relative">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="8"
            />
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="#22c55e"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="201"
              strokeDashoffset="60"
              className="animate-stroke"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-bold" style={{ color: "#22c55e" }}>
              70%
            </span>
            <span className="text-[8px]" style={{ color: "#64748b" }}>
              ลดได้
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>
            Carbon Footprint
          </p>
          <p className="text-[11px] leading-relaxed" style={{ color: "#64748b" }}>
            {'สัปดาห์นี้ปล่อย CO₂ '}
            <span className="font-bold" style={{ color: "#22c55e" }}>18.4 kg</span>
            {' (ลดลง 12% จากสัปดาห์ก่อน)'}
          </p>
        </div>
      </div>
    </div>
  )
}
