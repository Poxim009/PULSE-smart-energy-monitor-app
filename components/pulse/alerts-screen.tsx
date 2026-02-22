"use client"

import { useState } from "react"

export function AlertsScreen() {
  const [toastMsg, setToastMsg] = useState<string | null>(null)

  function showToast(msg: string) {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(null), 2000)
  }

  return (
    <div className="flex flex-col gap-4 pb-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between pt-3 px-1 animate-fade-up">
        <h1 className="text-lg font-bold" style={{ color: "#f1f5f9" }}>
          Alerts
        </h1>
        <span
          className="text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(239,68,68,0.2)",
            color: "#ef4444",
          }}
        >
          3 ใหม่
        </span>
      </div>

      {/* Alert 1 - Urgent (Red) */}
      <div
        className="rounded-[16px] p-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          borderLeft: "3px solid #ef4444",
          animationDelay: "0.05s",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(239,68,68,0.2)", color: "#ef4444" }}
          >
            ด่วน
          </span>
          <span className="text-xs" style={{ color: "#64748b" }}>
            10 นาทีที่แล้ว
          </span>
        </div>
        <p className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>
          🚨 ตรวจพบความผิดปกติของแอร์
        </p>
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: "#64748b" }}>
          แอร์ห้องนอนใช้พลังงานสูงผิดปกติ กรุณาตรวจแผ่นกรอง
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => showToast("ปิดแอร์แล้ว")}
            className="flex-1 text-[11px] font-medium py-2 rounded-xl transition-opacity hover:opacity-80"
            style={{
              background: "rgba(239,68,68,0.15)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#ef4444",
            }}
          >
            ปิดแอร์
          </button>
          <button
            onClick={() => showToast("ละเว้นแล้ว")}
            className="flex-1 text-[11px] font-medium py-2 rounded-xl transition-opacity hover:opacity-80"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#64748b",
            }}
          >
            ละเว้น
          </button>
        </div>
      </div>

      {/* Alert 2 - Tip (Yellow) */}
      <div
        className="rounded-[16px] p-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          borderLeft: "3px solid #fbbf24",
          animationDelay: "0.12s",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(251,191,36,0.2)", color: "#fbbf24" }}
          >
            เคล็ดลับ
          </span>
          <span className="text-xs" style={{ color: "#64748b" }}>
            1 ชั่วโมงที่แล้ว
          </span>
        </div>
        <p className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>
          💡 พรุ่งนี้แสงอาทิตย์สูงมาก!
        </p>
        <p className="text-[11px] leading-relaxed" style={{ color: "#64748b" }}>
          คาดว่าจะผลิตไฟฟ้าได้สูงช่วง 11:00–14:00 น. ควรวางแผนใช้เครื่องใช้ไฟฟ้าหนักช่วงนี้
        </p>
      </div>

      {/* Alert 3 - Reminder (Green) */}
      <div
        className="rounded-[16px] p-4 animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          borderLeft: "3px solid #22c55e",
          animationDelay: "0.19s",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(34,197,94,0.2)", color: "#22c55e" }}
          >
            เตือนความจำ
          </span>
          <span className="text-xs" style={{ color: "#64748b" }}>
            2 ชั่วโมงที่แล้ว
          </span>
        </div>
        <p className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>
          💧 ลืมปิดไฟห้องน้ำ?
        </p>
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: "#64748b" }}>
          ไฟห้องน้ำชั้น 2 เปิดทิ้งไว้ 45 นาทีแล้ว คิดเป็น 0.05 kWh
        </p>
        <button
          onClick={() => showToast("ปิดไฟแล้ว")}
          className="w-full text-[11px] font-medium py-2 rounded-xl transition-opacity hover:opacity-80"
          style={{
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#22c55e",
          }}
        >
          ปิดไฟตอนนี้
        </button>
      </div>

      {/* Weekly Stats */}
      <div
        className="rounded-[16px] p-4 grid grid-cols-3 gap-2 text-center animate-fade-up"
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.07)",
          animationDelay: "0.26s",
        }}
      >
        <div>
          <p className="text-lg font-bold" style={{ color: "#22c55e" }}>12</p>
          <p className="text-[10px]" style={{ color: "#64748b" }}>แจ้งเตือน</p>
        </div>
        <div>
          <p className="text-lg font-bold" style={{ color: "#00e5ff" }}>8</p>
          <p className="text-[10px]" style={{ color: "#64748b" }}>แก้ไขแล้ว</p>
        </div>
        <div>
          <p className="text-lg font-bold" style={{ color: "#fbbf24" }}>47</p>
          <p className="text-[10px]" style={{ color: "#64748b" }}>THB ประหยัด</p>
        </div>
      </div>

      {/* Toast */}
      {toastMsg && (
        <div
          className="fixed left-1/2 -translate-x-1/2 bottom-28 z-50 px-4 py-2 rounded-xl text-xs font-medium"
          style={{
            background: "#22c55e",
            color: "#0a0f1e",
          }}
        >
          {toastMsg}
        </div>
      )}
    </div>
  )
}
