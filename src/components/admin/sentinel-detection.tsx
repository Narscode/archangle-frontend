"use client"

import { Search } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const chartData = [
  { date: "Jul 14", value: 2 },
  { date: "Jul 15", value: 5 },
  { date: "Jul 16", value: 8 },
  { date: "Jul 17", value: 12 },
  { date: "Jul 18", value: 25 },
  { date: "Jul 19", value: 95 },
]

const ipData = [
  { ip: "202.4004.505.666.999", status: "URL Blocked" },
  { ip: "202.4004.505.666.999", status: "URL Blocked" },
  { ip: "202.4004.505.666.999", status: "URL Blocked" },
  { ip: "202.4004.505.666.999", status: "URL Blocked" },
]

export default function CDNDeobfuscationTool() {
  return (
    <div className="w-full h-full relative bg-[#FEFFFF] overflow-hidden rounded-[10px] p-6">
      {/* Header Section */}
      <div className="w-full max-w-[693px] mb-8">
        <h1 className="text-black text-base font-inter font-normal leading-[22px] mb-1">CDN De-Obfuscation Tool</h1>
        <p className="text-black text-sm font-inter font-normal leading-[22px] text-justify">
          adipiscing nulla, vitae faucibus diam ipsum urna. non, vitae Nunc elit elit. ex. orci commodo venenatis nisi
          nec Ut fringilla luctus
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-[447px] mb-8">
        <div className="flex items-center gap-2 px-[10px] py-[10px] pr-[14px] bg-white rounded-lg border border-[#D4D4D8] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-base font-inter font-normal leading-6 text-[#A1A1AA] placeholder:text-[#A1A1AA] bg-transparent border-none outline-none"
          />
          <Search className="w-5 h-5 text-[#1D1B20]" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <h2 className="text-black text-base font-inter font-normal leading-[22px] mb-4">CDNs De-Obfuscation per Day</h2>

        <div className="w-full h-[200px] border-2 border-[#121926] rounded">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 9.41,
                  fontFamily: "Roboto",
                  fill: "rgba(0, 0, 0, 0.60)",
                  letterSpacing: "0.12px",
                }}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fill: "black",
                  letterSpacing: "0.50px",
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#222222" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-[10px] h-[10px] bg-[#222222] rounded-full"></div>
          <span className="text-black text-xs font-roboto font-medium leading-4 tracking-[0.50px]">
            CDNs De-Obfuscation
          </span>
        </div>
      </div>

      {/* Data Table */}
      <div className="w-full">
        {/* Table Header */}
        <div className="w-full h-[34px] bg-[#C8CFF5] rounded border overflow-hidden mb-0">
          <div className="flex items-center h-full px-6 py-2">
            <div className="flex-1 text-black/80 text-xs font-inter font-normal leading-4">Discovered IP Address</div>
            <div className="w-[200px] text-black/80 text-xs font-inter font-normal leading-4">Status</div>
            <div className="w-[300px] text-black/80 text-xs font-inter font-normal leading-4">Action</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="w-full">
          {ipData.map((item, index) => (
            <div key={index} className="w-full h-[52px] border-b-[0.5px] border-[#E9EAEB] flex items-center px-6">
              <div className="flex-1 text-[#1E1E1E] text-sm font-inter font-normal leading-[22px]">{item.ip}</div>
              <div className="w-[200px] text-[#1E1E1E] text-sm font-inter font-normal leading-[22px]">
                {item.status}
              </div>
              <div className="w-[300px] flex items-center gap-4">
                <button className="px-[14px] py-2 bg-[#004EEB] text-white text-sm font-inter font-medium leading-5 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#004EEB] hover:bg-[#003CC7] transition-colors">
                  Send to CDN Provider
                </button>
                <button className="px-[14px] py-2 bg-[#004EEB] text-white text-sm font-inter font-medium leading-5 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#004EEB] hover:bg-[#003CC7] transition-colors">
                  Notify ISP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
