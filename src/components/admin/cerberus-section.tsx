import type React from "react"

interface WalletData {
  walletAddress: string
  connectedWallet: string
  bridge: string
  riskScore: string
}

const FundFlowerTrackerProgress: React.FC = () => {
  const walletData: WalletData[] = [
    {
      walletAddress: "070t198910....w4ae6j",
      connectedWallet: "1234*******6789",
      bridge: "Eth-BSC Bridge",
      riskScore: "56/100",
    },
    {
      walletAddress: "070t198910....w4ae6j",
      connectedWallet: "1234*******6789",
      bridge: "Eth-BSC Bridge",
      riskScore: "56/100",
    },
    {
      walletAddress: "070t198910....w4ae6j",
      connectedWallet: "1234*******6789",
      bridge: "Eth-BSC Bridge",
      riskScore: "56/100",
    },
    {
      walletAddress: "070t198910....w4ae6j",
      connectedWallet: "1234*******6789",
      bridge: "Eth-BSC Bridge",
      riskScore: "56/100",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-[#FEFFFF] p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-black text-base font-normal leading-[22px] mb-1 font-sans">Fund Flower Tracker</h1>
        <p className="text-black text-sm font-normal leading-[22px] font-sans">
          adipiscing nulla, vitae faucibus diam ipsum urna. non, vitae Nunc elit elit. ex. orci commodo venenatis nisi
          nec Ut fringilla luctus
        </p>
      </div>

      {/* Progress Card */}
      <div className="w-full max-w-[634px] mb-6 p-5 border border-[#E3E8EF] rounded-[10px] bg-white">
        <div className="flex justify-between items-start mb-3">
          <span className="text-black text-base font-normal leading-[22px] font-sans">Fund Flower Tracker</span>
          <span className="text-black text-[26px] font-bold leading-[39px]" style={{ fontFamily: "Plus Jakarta Sans" }}>
            70%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full">
          <div className="w-full h-[17px] bg-[#D9D9D9] rounded-sm"></div>
          <div className="absolute top-0 left-0 h-[17px] bg-[#051565] rounded-sm" style={{ width: "70%" }}></div>
        </div>
      </div>

      {/* Data Table */}
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="w-full h-[34px] bg-[#C8CFF5] rounded-[4px] flex items-center px-6 mb-0">
          <div className="flex-1 text-black/80 text-xs font-normal leading-4 font-sans">Wallet/Smart Contract</div>
          <div className="flex-1 text-black/80 text-xs font-normal leading-4 font-sans">Connected Wallet</div>
          <div className="flex-1 text-black/80 text-xs font-normal leading-4 font-sans">Bridge</div>
          <div className="flex-1 text-black/80 text-xs font-normal leading-4 font-sans">DeFi Risk Score</div>
        </div>

        {/* Table Rows */}
        <div className="bg-white">
          {walletData.map((item, index) => (
            <div key={index} className="w-full h-[52px] flex items-center px-6 border-b border-[#E9EAEB]/50">
              <div className="flex-1 text-[#1E1E1E] text-sm font-normal leading-[22px] font-sans">
                {item.walletAddress}
              </div>
              <div className="flex-1 text-[#1E1E1E] text-sm font-normal leading-[22px] font-sans">
                {item.connectedWallet}
              </div>
              <div className="flex-1 text-[#1E1E1E] text-sm font-normal leading-[22px] font-sans">{item.bridge}</div>
              <div className="flex-1">
                <div className="inline-flex items-center justify-center px-2 py-2 bg-[#0924A9] rounded-[5px]">
                  <span className="text-white text-xs font-normal leading-4 font-sans">{item.riskScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FundFlowerTrackerProgress
