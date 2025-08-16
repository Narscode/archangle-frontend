import React from "react";
import { AlertTriangle } from "lucide-react";

type RiskRow = {
  account: string;
  action: string;
  score: number;
};

const data: RiskRow[] = [
  { account: "1234*******6789", action: "Smurfing", score: 57 },
  { account: "1234*******6789", action: "Smurfing", score: 57 },
  { account: "1234*******6789", action: "Smurfing", score: 57 },
  { account: "1234*******6789", action: "Smurfing", score: 57 },
];

const RiskTable: React.FC = () => {
  return (
    <div className="w-full bg-[#FEFFFF] rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-3 bg-[#C8CFF5] text-[12px] font-normal text-black/80 px-6 py-2">
        <div>Account</div>
        <div className="text-center">Action</div>
        <div className="text-right pr-8">Risk Score</div>
      </div>

      {/* Rows */}
      {data.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 items-center border-b border-[#E9EAEB] px-6 py-3 text-sm text-[#1E1E1E]"
        >
          <div>{row.account}</div>
          <div className="text-center">{row.action}</div>
          <div className="flex items-center justify-end gap-2 pr-8">
            <AlertTriangle className="text-red-500 w-4 h-4" />
            <span>{row.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiskTable;
