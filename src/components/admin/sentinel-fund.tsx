"use client"

import { Search } from "lucide-react"
import { LineChart, Line, ResponsiveContainer } from "recharts"
import { XAxis, YAxis } from "recharts"

const chartData = [
  { date: "Jul 14", funds: 2 },
  { date: "Jul 15", funds: 5 },
  { date: "Jul 16", funds: 8 },
  { date: "Jul 17", funds: 12 },
  { date: "Jul 18", funds: 25 },
  { date: "Jul 19", funds: 95 },
]

const fundData = [
  {
    bankAccount: "23456*******78910",
    cryptoWallet: "070t19....w4ae",
    fundsSent: "$35,000",
    status: "Logged",
  },
  {
    bankAccount: "23456*******78910",
    cryptoWallet: "070t19....w4ae",
    fundsSent: "$35,000",
    status: "Logged",
  },
  {
    bankAccount: "23456*******78910",
    cryptoWallet: "070t19....w4ae",
    fundsSent: "$35,000",
    status: "Logged",
  },
  {
    bankAccount: "23456*******78910",
    cryptoWallet: "070t19....w4ae",
    fundsSent: "$35,000",
    status: "Logged",
  },
]

export default function FundFlowerTracker() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-black text-base font-normal leading-[22px] mb-1">Fund Flower Tracker</h1>
        <p className="text-black text-sm font-normal leading-[22px] text-justify">
          adipiscing nulla, vitae faucibus diam ipsum urna. non, vitae Nunc elit elit. ex. orci commodo venenatis nisi
          nec Ut fringilla luctus
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by file wallet address"
            className="w-full px-3 py-2.5 pr-10 bg-white border border-zinc-300 rounded-lg shadow-sm text-base placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-600" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <h2 className="text-black text-base font-normal leading-[22px] mb-4">Funds send to Crypto Exchange</h2>

        <div className="bg-white border-2 border-gray-800 rounded-lg p-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 9.41,
                  fontFamily: "Roboto",
                  fill: "rgba(0, 0, 0, 0.60)",
                  fontWeight: 400,
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
                  fill: "black",
                  fontWeight: 500,
                }}
              />
              <Line type="monotone" dataKey="funds" stroke="#222222" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          <span className="text-black text-xs font-medium leading-4 tracking-wide">Funds send</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        {/* Table Header */}
        <div className="bg-[#C8CFF5] px-6 py-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-black/80 text-xs font-normal leading-4">Bank Account</div>
            <div className="text-black/80 text-xs font-normal leading-4">Crypto Exchange Wallet</div>
            <div className="text-black/80 text-xs font-normal leading-4">Funds Sent</div>
            <div className="text-black/80 text-xs font-normal leading-4">FundFlowLedger</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white">
          {fundData.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 px-6 py-3.5 border-b border-gray-200 last:border-b-0">
              <div className="text-[#1E1E1E] text-sm font-normal leading-[22px]">{item.bankAccount}</div>
              <div className="text-[#1E1E1E] text-sm font-normal leading-[22px]">{item.cryptoWallet}</div>
              <div className="text-[#1E1E1E] text-sm font-normal leading-[22px]">{item.fundsSent}</div>
              <div className="flex items-center gap-3">
                <span className="text-[#5E6FCB] text-sm font-normal leading-[22px]">{item.status}</span>
                <input type="checkbox" className="w-4 h-4 border border-gray-400 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
