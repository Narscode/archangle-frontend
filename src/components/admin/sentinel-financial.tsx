import type React from "react"
import { AlertTriangle } from "lucide-react"

const AnomalyTable: React.FC = () => {
  const data = [
    {
      date: "26/07/2025",
      accountId: "1234*******6789",
      source: "e-wallet Y",
      anomaly: "Smurfing",
      score: 57,
    },
    {
      date: "26/07/2025",
      accountId: "1234*******6789",
      source: "e-wallet Y",
      anomaly: "Smurfing",
      score: 57,
    },
    {
      date: "26/07/2025",
      accountId: "1234*******6789",
      source: "e-wallet Y",
      anomaly: "Smurfing",
      score: 57,
    },
    {
      date: "26/07/2025",
      accountId: "1234*******6789",
      source: "e-wallet Y",
      anomaly: "Smurfing",
      score: 57,
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#FEFFFF] p-5 rounded-[10px] overflow-hidden">
      <div className="mb-7">
        <p className="text-black text-sm font-normal leading-4">Hanya terlihat oleh PPATK dan Bank terkait</p>
      </div>

      <div className="w-full max-w-[439px] h-[74px] mb-6 bg-[#F2F2F2] rounded-[10px] overflow-hidden">
        <div className="flex items-center gap-[18px] px-6 py-[18px]">
          <div className="w-[33px] h-[33px] flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-[#E42B3B]" strokeWidth={2.64} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#1E1E1E] text-base font-bold leading-[22px]">Real-Time Alerts</h3>
            <p className="text-black text-xs font-normal leading-4">
              Suspicious account detected: Account ID 5678-9001-800...
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Table Header */}
        <div className="h-[34px] bg-[#C8CFF5] rounded-[4px] overflow-hidden relative">
          <div className="absolute left-[22px] top-[9px] text-black/80 text-xs font-normal leading-4">Date</div>
          <div className="absolute left-[170px] top-[9px] text-black/80 text-xs font-normal leading-4">Account ID</div>
          <div className="absolute left-[359px] top-[9px] text-black/80 text-xs font-normal leading-4">Source</div>
          <div className="absolute left-[517px] top-[9px] text-black/80 text-xs font-normal leading-4">
            Anomaly Type
          </div>
          <div className="absolute left-[673px] top-[9px] text-black/80 text-xs font-normal leading-4">
            Suspicious Score
          </div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {data.map((row, idx) => (
            <div key={idx} className="h-[52px] relative border-b-[0.5px] border-[#E9EAEB]">
              <div className="absolute left-6 top-[14px] text-[#1E1E1E] text-sm font-normal leading-[22px]">
                {row.date}
              </div>
              <div className="absolute left-[170px] top-[14px] text-[#1E1E1E] text-sm font-normal leading-[22px]">
                {row.accountId}
              </div>
              <div className="absolute left-[361px] top-[13px] text-center text-[#1E1E1E] text-sm font-normal leading-[22px]">
                {row.source}
              </div>
              <div className="absolute left-[515px] top-[14px] text-[#1E1E1E] text-sm font-normal leading-[22px]">
                {row.anomaly}
              </div>

              {/* Suspicious Score with Warning Icon */}
              <div className="absolute left-[677px] top-4 flex items-center gap-[6px]">
                <div className="w-[25px] h-[25px] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#E42B3B]" strokeWidth={2} />
                </div>
                <div className="text-[#1E1E1E] text-sm font-normal leading-[22px]">{row.score}</div>
              </div>

              {/* View on blockchain button */}
              <div className="absolute left-[737px] top-2">
                <div className="w-full h-full rounded-lg justify-start items-start inline-flex">
                  <div className="px-[14px] py-2 bg-[#004EEB] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] overflow-hidden rounded-lg outline outline-1 outline-[#004EEB] outline-offset-[-1px] justify-center items-center gap-2 flex">
                    <div className="text-white text-sm font-medium leading-5 font-[Inter]">View on blockchain</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnomalyTable
