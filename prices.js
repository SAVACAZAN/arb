

async function init() {
    const url = "https://exchange-api.lcx.com/market/tickers"
    const resp = await fetch(url)
    const json = await resp.json()
    



    const ADAETHBid = json.data['ADA/ETH'].bestBid
		const ADAEURBid = json.data['ADA/EUR'].bestBid
		const ADALCXBid = json.data['ADA/LCX'].bestBid
        const ADAETHAsk = json.data['ADA/ETH'].bestAsk
		const ADAEURAsk = json.data['ADA/EUR'].bestAsk
		const ADALCXAsk = json.data['ADA/LCX'].bestAsk
		
		const AMPEURBid = json.data['AMP/EUR'].bestBid
		const AMPLCXBid = json.data['AMP/LCX'].bestBid
		const APEEURBid = json.data['APE/EUR'].bestBid
		const APEUSDCBid = json.data['APE/USDC'].bestBid
		const AMPEURAsk = json.data['AMP/EUR'].bestAsk
		const AMPLCXAsk = json.data['AMP/LCX'].bestAsk
		const APEEURAsk = json.data['APE/EUR'].bestAsk
		const APEUSDCAsk = json.data['APE/USDC'].bestAsk
	  
	  const ATRIEURBid = json.data['ATRI/EUR'].bestBid
		const ATRILCXBid = json.data['ATRI/LCX'].bestBid
		const AVAXEURBid = json.data['AVAX/EUR'].bestBid
		const AVAXLCXBid = json.data['AVAX/LCX'].bestBid
		const AVAXUSDCBid = json.data['AVAX/USDC'].bestBid
		
		const BATLCXBid = json.data['BAT/LCX'].bestBid
		const ATRIEURAsk = json.data['ATRI/EUR'].bestAsk
		const ATRILCXAsk = json.data['ATRI/LCX'].bestAsk
		const AVAXEURAsk = json.data['AVAX/EUR'].bestAsk
		const AVAXLCXAsk = json.data['AVAX/LCX'].bestAsk
		const AVAXUSDCAsk = json.data['AVAX/USDC'].bestAsk
		const BATLCXAsk = json.data['BAT/LCX'].bestAsk
		const BATUSDCAsk = json.data['BAT/USDC'].bestAsk
		const BATUSDCBid = json.data['BAT/USDC'].bestBid
		
		const BTCUSDCAsk = json.data['BTC/USDC'].bestAsk
		const BTCUSDCBid = json.data['BTC/USDC'].bestBid

		
		const BCHLCXBid = json.data['BCH/LCX'].bestBid
		const BCHEURBid = json.data['BCH/EUR'].bestBid
		const CELOLCXBid = json.data['CELO/LCX'].bestBid
		const CELOETHBid = json.data['CELO/ETH'].bestBid
		const CELOEURBid = json.data['CELO/EUR'].bestBid
		const DAGLCXBid = json.data['DAG/LCX'].bestBid
		const DAGETHBid = json.data['DAG/ETH'].bestBid
		const DGBLCXBid = json.data['DGB/LCX'].bestBid
		const DGBUSDCBid = json.data['DGB/USDC'].bestBid
		const DGMVLCXBid = json.data['DGMV/LCX'].bestBid
		const DGMVUSDCBid = json.data['DGMV/USDC'].bestBid
		const DGMVEURBid = json.data['DGMV/EUR'].bestBid
		const BCHLCXAsk = json.data['BCH/LCX'].bestAsk
		const BCHEURAsk = json.data['BCH/EUR'].bestAsk
		const CELOLCXAsk = json.data['CELO/LCX'].bestAsk
		const CELOETHAsk = json.data['CELO/ETH'].bestAsk
		const CELOEURAsk = json.data['CELO/EUR'].bestAsk
		const DAGLCXAsk = json.data['DAG/LCX'].bestAsk
		const DAGETHAsk = json.data['DAG/ETH'].bestAsk
		const DGBLCXAsk = json.data['DGB/LCX'].bestAsk
		const DGBUSDCAsk = json.data['DGB/USDC'].bestAsk
		const DGMVLCXAsk = json.data['DGMV/LCX'].bestAsk
		const DGMVUSDCAsk = json.data['DGMV/USDC'].bestAsk
		const DGMVEURAsk = json.data['DGMV/EUR'].bestAsk
	
	
	
		const ETHUSDCBid = json.data['ETH/USDC'].bestBid
		const ETHEURBid = json.data['ETH/EUR'].bestBid
		const ETHBTCBid = json.data['ETH/BTC'].bestBid
		
		const DOGELCXBid = json.data['DOGE/LCX'].bestBid
		const DOGEEURBid = json.data['DOGE/EUR'].bestBid
		const DOTLCXBid = json.data['DOT/LCX'].bestBid
		const DOTEURBid = json.data['DOT/EUR'].bestBid
		const ENJLCXBid = json.data['ENJ/LCX'].bestBid
		const ENJBTCBid = json.data['ENJ/BTC'].bestBid
		const ETHWLCXBid = json.data['ETHW/LCX'].bestBid
		const ETHWEURBid = json.data['ETHW/EUR'].bestBid
		const HBARLCXBid = json.data['HBAR/LCX'].bestBid
		const HBAREURBid = json.data['HBAR/EUR'].bestBid
		const HOTLCXBid = json.data['HOT/LCX'].bestBid
		const HOTBTCBid = json.data['HOT/BTC'].bestBid
		const HOTEURBid = json.data['HOT/EUR'].bestBid
		const LINKLCXBid = json.data['LINK/LCX'].bestBid
		const LINKBTCBid = json.data['LINK/BTC'].bestBid
		const LINKEURBid = json.data['LINK/EUR'].bestBid
		const LTCLCXBid = json.data['LTC/LCX'].bestBid
		const LTCEURBid = json.data['LTC/EUR'].bestBid
		const MANALCXBid = json.data['MANA/LCX'].bestBid
		const MANABTCBid = json.data['MANA/BTC'].bestBid
		const MATICLCXBid = json.data['MATIC/LCX'].bestBid
		const MATICEURBid = json.data['MATIC/EUR'].bestBid
		const MKRLCXBid = json.data['MKR/LCX'].bestBid
		const MKRUSDCBid = json.data['MKR/USDC'].bestBid
		const NMKRETHBid = json.data['NMKR/ETH'].bestBid
		const NMKRLCXBid = json.data['NMKR/LCX'].bestBid
		const NMKREURBid = json.data['NMKR/EUR'].bestBid
	
		const ETHUSDCAsk = json.data['ETH/USDC'].bestAsk
		const ETHEURAsk = json.data['ETH/EUR'].bestAsk
		const ETHBTCAsk = json.data['ETH/BTC'].bestAsk
		const DOGELCXAsk = json.data['DOGE/LCX'].bestAsk
		const DOGEEURAsk = json.data['DOGE/EUR'].bestAsk
		const DOTLCXAsk = json.data['DOT/LCX'].bestAsk
		const DOTEURAsk = json.data['DOT/EUR'].bestAsk
		const ENJLCXAsk = json.data['ENJ/LCX'].bestAsk
		const ENJBTCAsk = json.data['ENJ/BTC'].bestAsk
		const ETHWLCXAsk = json.data['ETHW/LCX'].bestAsk
		const ETHWEURAsk = json.data['ETHW/EUR'].bestAsk
		const HBARLCXAsk = json.data['HBAR/LCX'].bestAsk
		const HBAREURAsk = json.data['HBAR/EUR'].bestAsk
		const HOTLCXAsk = json.data['HOT/LCX'].bestAsk
		const HOTBTCAsk = json.data['HOT/BTC'].bestAsk
		const HOTEURAsk = json.data['HOT/EUR'].bestAsk
		const LINKLCXAsk = json.data['LINK/LCX'].bestAsk
		const LINKBTCAsk = json.data['LINK/BTC'].bestAsk
		const LINKEURAsk = json.data['LINK/EUR'].bestAsk
		const LTCLCXAsk = json.data['LTC/LCX'].bestAsk
		const LTCEURAsk = json.data['LTC/EUR'].bestAsk
		const MANALCXAsk = json.data['MANA/LCX'].bestAsk
		const MANABTCAsk = json.data['MANA/BTC'].bestAsk
		const MATICLCXAsk = json.data['MATIC/LCX'].bestAsk
		const MATICEURAsk = json.data['MATIC/EUR'].bestAsk
		const MKRLCXAsk = json.data['MKR/LCX'].bestAsk
		const MKRUSDCAsk = json.data['MKR/USDC'].bestAsk
		const NMKRETHAsk = json.data['NMKR/ETH'].bestAsk
		const NMKRLCXAsk = json.data['NMKR/LCX'].bestAsk
		const NMKREURAsk = json.data['NMKR/EUR'].bestAsk
		
		const LCXETHAsk = json.data['LCX/ETH'].bestAsk
		const LCXBTCAsk = json.data['LCX/BTC'].bestAsk
		
		const LCXUSDCAsk = json.data['LCX/USDC'].bestAsk
		const LCXUSDCBid = json.data['LCX/USDC'].bestBid
		
		const LCXEURAsk = json.data['LCX/EUR'].bestAsk
		const LCXEURBid = json.data['LCX/EUR'].bestBid
		
		const USDCEURBid = json.data['USDC/EUR'].bestBid
		const USDCEURAsk = json.data['USDC/EUR'].bestAsk

		const OGNLCXBid = json.data['OGN/LCX'].bestBid
		const OGNUSDCBid = json.data['OGN/USDC'].bestBid
		const OPLCXBid = json.data['OP/LCX'].bestBid
		const OPEURBid = json.data['OP/EUR'].bestBid
		const OGNLCXAsk = json.data['OGN/LCX'].bestAsk
		const OGNUSDCAsk = json.data['OGN/USDC'].bestAsk
		const OPLCXAsk = json.data['OP/LCX'].bestAsk
		const OPEURAsk = json.data['OP/EUR'].bestAsk
		const QNTLCXBid = json.data['QNT/LCX'].bestBid
		
		const QNTBTCBid = json.data['QNT/BTC'].bestBid
		const REVVLCXBid = json.data['REVV/LCX'].bestBid
		const REVVBTCBid = json.data['REVV/BTC'].bestBid
		const SANDLCXBid = json.data['SAND/LCX'].bestBid
		const SANDUSDCBid = json.data['SAND/USDC'].bestBid
		const SANDEURBid = json.data['SAND/EUR'].bestBid
		const VISLCXBid = json.data['VIS/LCX'].bestBid
		const VISUSDCBid = json.data['VIS/USDC'].bestBid
		const TIALCXBid = json.data['TIA/LCX'].bestBid
		const TIAETHBid = json.data['TIA/ETH'].bestBid
		const TIAEURBid = json.data['TIA/EUR'].bestBid
		const UNILCXBid = json.data['UNI/LCX'].bestBid
		const UNIBTCBid = json.data['UNI/BTC'].bestBid
		const UNIEURBid = json.data['UNI/EUR'].bestBid
		
		
		
		const QNTLCXAsk = json.data['QNT/LCX'].bestAsk
		const QNTBTCAsk = json.data['QNT/BTC'].bestAsk
		const REVVLCXAsk = json.data['REVV/LCX'].bestAsk
		const REVVBTCAsk = json.data['REVV/BTC'].bestAsk
		const SANDLCXAsk = json.data['SAND/LCX'].bestAsk
		const SANDUSDCAsk = json.data['SAND/USDC'].bestAsk
		const SANDEURAsk = json.data['SAND/EUR'].bestAsk
		const VISLCXAsk = json.data['VIS/LCX'].bestAsk
		const VISUSDCAsk = json.data['VIS/USDC'].bestAsk
		const TIALCXAsk = json.data['TIA/LCX'].bestAsk
		const TIAETHAsk = json.data['TIA/ETH'].bestAsk
		const TIAEURAsk = json.data['TIA/EUR'].bestAsk
		const UNILCXAsk = json.data['UNI/LCX'].bestAsk
		const UNIBTCAsk = json.data['UNI/BTC'].bestAsk
		const UNIEURAsk = json.data['UNI/EUR'].bestAsk
		
		
		const AMPLCXPRICUSDCEBid= LCXUSDCBid * AMPLCXBid
		const AMPLCXPRICUSDCEAsk= LCXUSDCBid * AMPLCXAsk
		const AMPLCXPRICEURBid= LCXEURBid * AMPLCXBid
		const AMPLCXPRICEURAsk= LCXEURBid * AMPLCXAsk
		const AMPLCXPRICBTCBid= AMPLCXPRICUSDCEBid / BTCUSDCBid
		const AMPLCXPRICBTCAsk= AMPLCXPRICUSDCEAsk / BTCUSDCBid
		const AMPLCXPRICETHBid= AMPLCXPRICUSDCEBid / ETHUSDCBid
		const AMPLCXPRICETHAsk= AMPLCXPRICUSDCEAsk / ETHUSDCBid
		
		const ADALCXPRICUSDCEBid= LCXUSDCBid * ADALCXBid
		const ADALCXPRICUSDCEAsk= LCXUSDCBid * ADALCXAsk
		const ADALCXPRICEURBid= LCXEURBid * ADALCXBid
		const ADALCXPRICEURAsk= LCXEURBid * ADALCXAsk
		const ADALCXPRICBTCBid= ADALCXPRICUSDCEBid / BTCUSDCBid
		const ADALCXPRICBTCAsk= ADALCXPRICUSDCEAsk / BTCUSDCBid
		const ADALCXPRICETHBid= ADALCXPRICUSDCEBid / ETHUSDCBid
		const ADALCXPRICETHAsk= ADALCXPRICUSDCEAsk / ETHUSDCBid
		
		const ATRILCXPRICUSDCEBid= LCXUSDCBid * ATRILCXBid
		const ATRILCXPRICUSDCEAsk= LCXUSDCBid * ATRILCXAsk
		const ATRILCXPRICEURBid= LCXEURBid * ATRILCXBid
		const ATRILCXPRICEURAsk= LCXEURBid * ATRILCXAsk
		const ATRILCXPRICBTCBid= ATRILCXPRICUSDCEBid / BTCUSDCBid
		const ATRILCXPRICBTCAsk= ATRILCXPRICUSDCEAsk / BTCUSDCBid
		const ATRILCXPRICETHBid= ATRILCXPRICUSDCEBid / ETHUSDCBid
		const ATRILCXPRICETHAsk= ATRILCXPRICUSDCEAsk / ETHUSDCBid
		
		
		
		const BATLCXPRICUSDCEBid= LCXUSDCBid * BATLCXBid
		const BATLCXPRICUSDCEAsk= LCXUSDCBid * BATLCXAsk
		const BATLCXPRICEURBid= LCXEURBid * BATLCXBid
		const BATLCXPRICEURAsk= LCXEURBid * BATLCXAsk
		const BATLCXPRICBTCBid= BATLCXPRICUSDCEBid / BTCUSDCBid
		const BATLCXPRICBTCAsk= BATLCXPRICUSDCEAsk / BTCUSDCBid
		const BATLCXPRICETHBid= BATLCXPRICUSDCEBid / ETHUSDCBid
		const BATLCXPRICETHAsk= BATLCXPRICUSDCEAsk / ETHUSDCBid
		
		const BCHLCXPRICUSDCEBid= LCXUSDCBid * BCHLCXBid
		const BCHLCXPRICUSDCEAsk= LCXUSDCBid * BCHLCXAsk
		const BCHLCXPRICEURBid= LCXEURBid * BCHLCXBid
		const BCHLCXPRICEURAsk= LCXEURBid * BCHLCXAsk
		const BCHLCXPRICBTCBid= BCHLCXPRICUSDCEBid / BTCUSDCBid
		const BCHLCXPRICBTCAsk= BCHLCXPRICUSDCEAsk / BTCUSDCBid
		const BCHLCXPRICETHBid= BCHLCXPRICUSDCEBid / ETHUSDCBid
		const BCHLCXPRICETHAsk= BCHLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const CELOLCXPRICUSDCEBid= LCXUSDCBid * CELOLCXBid
		const CELOLCXPRICUSDCEAsk= LCXUSDCBid * CELOLCXAsk
		const CELOLCXPRICEURBid= LCXEURBid * CELOLCXBid
		const CELOLCXPRICEURAsk= LCXEURBid * CELOLCXAsk
		const CELOLCXPRICBTCBid= CELOLCXPRICUSDCEBid / BTCUSDCBid
		const CELOLCXPRICBTCAsk= CELOLCXPRICUSDCEAsk / BTCUSDCBid
		const CELOLCXPRICETHBid= CELOLCXPRICUSDCEBid / ETHUSDCBid
		const CELOLCXPRICETHAsk= CELOLCXPRICUSDCEAsk / ETHUSDCBid
		
		const DAGLCXPRICUSDCEBid= LCXUSDCBid * DAGLCXBid
		const DAGLCXPRICUSDCEAsk= LCXUSDCBid * DAGLCXAsk
		const DAGLCXPRICEURBid= LCXEURBid * DAGLCXBid
		const DAGLCXPRICEURAsk= LCXEURBid * DAGLCXAsk
		const DAGLCXPRICBTCBid= DAGLCXPRICUSDCEBid / BTCUSDCBid
		const DAGLCXPRICBTCAsk= DAGLCXPRICUSDCEAsk / BTCUSDCBid
		const DAGLCXPRICETHBid= DAGLCXPRICUSDCEBid / ETHUSDCBid
		const DAGLCXPRICETHAsk= DAGLCXPRICUSDCEAsk / ETHUSDCBid
		
		const DGBLCXPRICUSDCEBid= LCXUSDCBid * DGBLCXBid
		const DGBLCXPRICUSDCEAsk= LCXUSDCBid * DGBLCXAsk
		const DGBLCXPRICEURBid= LCXEURBid * DGBLCXBid
		const DGBLCXPRICEURAsk= LCXEURBid * DGBLCXAsk
		const DGBLCXPRICBTCBid= DGBLCXPRICUSDCEBid / BTCUSDCBid
		const DGBLCXPRICBTCAsk= DGBLCXPRICUSDCEAsk / BTCUSDCBid
		const DGBLCXPRICETHBid= DGBLCXPRICUSDCEBid / ETHUSDCBid
		const DGBLCXPRICETHAsk= DGBLCXPRICUSDCEAsk / ETHUSDCBid
		
		const DGMVLCXPRICUSDCEBid= LCXUSDCBid * DGMVLCXBid
		const DGMVLCXPRICUSDCEAsk= LCXUSDCBid * DGMVLCXAsk
		const DGMVLCXPRICEURBid= LCXEURBid * DGMVLCXBid
		const DGMVLCXPRICEURAsk= LCXEURBid * DGMVLCXAsk
		const DGMVLCXPRICBTCBid= DGMVLCXPRICUSDCEBid / BTCUSDCBid
		const DGMVLCXPRICBTCAsk= DGMVLCXPRICUSDCEAsk / BTCUSDCBid
		const DGMVLCXPRICETHBid= DGMVLCXPRICUSDCEBid / ETHUSDCBid
		const DGMVLCXPRICETHAsk= DGMVLCXPRICUSDCEAsk / ETHUSDCBid
		
		const DOGELCXPRICUSDCEBid= LCXUSDCBid * DOGELCXBid
		const DOGELCXPRICUSDCEAsk= LCXUSDCBid * DOGELCXAsk
		const DOGELCXPRICEURBid= LCXEURBid * DOGELCXBid
		const DOGELCXPRICEURAsk= LCXEURBid * DOGELCXAsk
		const DOGELCXPRICBTCBid= DOGELCXPRICUSDCEBid / BTCUSDCBid
		const DOGELCXPRICBTCAsk= DOGELCXPRICUSDCEAsk / BTCUSDCBid
		const DOGELCXPRICETHBid= DOGELCXPRICUSDCEBid / ETHUSDCBid
		const DOGELCXPRICETHAsk= DOGELCXPRICUSDCEAsk / ETHUSDCBid
		
		const DOTLCXPRICUSDCEBid= LCXUSDCBid * DOTLCXBid
		const DOTLCXPRICUSDCEAsk= LCXUSDCBid * DOTLCXAsk
		const DOTLCXPRICEURBid= LCXEURBid * DOTLCXBid
		const DOTLCXPRICEURAsk= LCXEURBid * DOTLCXAsk
		const DOTLCXPRICBTCBid= DOTLCXPRICUSDCEBid / BTCUSDCBid
		const DOTLCXPRICBTCAsk= DOTLCXPRICUSDCEAsk / BTCUSDCBid
		const DOTLCXPRICETHBid= DOTLCXPRICUSDCEBid / ETHUSDCBid
		const DOTLCXPRICETHAsk= DOTLCXPRICUSDCEAsk / ETHUSDCBid
		
		const ENJLCXPRICUSDCEBid= LCXUSDCBid * ENJLCXBid
		const ENJLCXPRICUSDCEAsk= LCXUSDCBid * ENJLCXAsk
		const ENJLCXPRICEURBid= LCXEURBid * ENJLCXBid
		const ENJLCXPRICEURAsk= LCXEURBid * ENJLCXAsk
		const ENJLCXPRICBTCBid= ENJLCXPRICUSDCEBid / BTCUSDCBid
		const ENJLCXPRICBTCAsk= ENJLCXPRICUSDCEAsk / BTCUSDCBid
		const ENJLCXPRICETHBid= ENJLCXPRICUSDCEBid / ETHUSDCBid
		const ENJLCXPRICETHAsk= ENJLCXPRICUSDCEAsk / ETHUSDCBid
		
		const ETHWLCXPRICUSDCEBid= LCXUSDCBid * ETHWLCXBid
		const ETHWLCXPRICUSDCEAsk= LCXUSDCBid * ETHWLCXAsk
		const ETHWLCXPRICEURBid= LCXEURBid * ETHWLCXBid
		const ETHWLCXPRICEURAsk= LCXEURBid * ETHWLCXAsk
		const ETHWLCXPRICBTCBid= ETHWLCXPRICUSDCEBid / BTCUSDCBid
		const ETHWLCXPRICBTCAsk= ETHWLCXPRICUSDCEAsk / BTCUSDCBid
		const ETHWLCXPRICETHBid= ETHWLCXPRICUSDCEBid / ETHUSDCBid
		const ETHWLCXPRICETHAsk= ETHWLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const HBARLCXPRICUSDCEBid= LCXUSDCBid * HBARLCXBid
		const HBARLCXPRICUSDCEAsk= LCXUSDCBid * HBARLCXAsk
		const HBARLCXPRICEURBid= LCXEURBid * HBARLCXBid
		const HBARLCXPRICEURAsk= LCXEURBid * HBARLCXAsk
		const HBARLCXPRICBTCBid= HBARLCXPRICUSDCEBid / BTCUSDCBid
		const HBARLCXPRICBTCAsk= HBARLCXPRICUSDCEAsk / BTCUSDCBid
		const HBARLCXPRICETHBid= HBARLCXPRICUSDCEBid / ETHUSDCBid
		const HBARLCXPRICETHAsk= HBARLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const HOTLCXPRICUSDCEBid= LCXUSDCBid * HOTLCXBid
		const HOTLCXPRICUSDCEAsk= LCXUSDCBid * HOTLCXAsk
		const HOTLCXPRICEURBid= LCXEURBid * HOTLCXBid
		const HOTLCXPRICEURAsk= LCXEURBid * HOTLCXAsk
		const HOTLCXPRICBTCBid= HOTLCXPRICUSDCEBid / BTCUSDCBid
		const HOTLCXPRICBTCAsk= HOTLCXPRICUSDCEAsk / BTCUSDCBid
		const HOTLCXPRICETHBid= HOTLCXPRICUSDCEBid / ETHUSDCBid
		const HOTLCXPRICETHAsk= HOTLCXPRICUSDCEAsk / ETHUSDCBid
		
		const LINKLCXPRICUSDCEBid= LCXUSDCBid * LINKLCXBid
		const LINKLCXPRICUSDCEAsk= LCXUSDCBid * LINKLCXAsk
		const LINKLCXPRICEURBid= LCXEURBid * LINKLCXBid
		const LINKLCXPRICEURAsk= LCXEURBid * LINKLCXAsk
		const LINKLCXPRICBTCBid= LINKLCXPRICUSDCEBid / BTCUSDCBid
		const LINKLCXPRICBTCAsk= LINKLCXPRICUSDCEAsk / BTCUSDCBid
		const LINKLCXPRICETHBid= LINKLCXPRICUSDCEBid / ETHUSDCBid
		const LINKLCXPRICETHAsk= LINKLCXPRICUSDCEAsk / ETHUSDCBid
		
		const LTCLCXPRICUSDCEBid= LCXUSDCBid * LTCLCXBid
		const LTCLCXPRICUSDCEAsk= LCXUSDCBid * LTCLCXAsk
		const LTCLCXPRICEURBid= LCXEURBid * LTCLCXBid
		const LTCLCXPRICEURAsk= LCXEURBid * LTCLCXAsk
		const LTCLCXPRICBTCBid= LTCLCXPRICUSDCEBid / BTCUSDCBid
		const LTCLCXPRICBTCAsk= LTCLCXPRICUSDCEAsk / BTCUSDCBid
		const LTCLCXPRICETHBid= LTCLCXPRICUSDCEBid / ETHUSDCBid
		const LTCLCXPRICETHAsk= LTCLCXPRICUSDCEAsk / ETHUSDCBid
		
		const MANALCXPRICUSDCEBid= LCXUSDCBid * MANALCXBid
		const MANALCXPRICUSDCEAsk= LCXUSDCBid * MANALCXAsk
		const MANALCXPRICEURBid= LCXEURBid * MANALCXBid
		const MANALCXPRICEURAsk= LCXEURBid * MANALCXAsk
		const MANALCXPRICBTCBid= MANALCXPRICUSDCEBid / BTCUSDCBid
		const MANALCXPRICBTCAsk= MANALCXPRICUSDCEAsk / BTCUSDCBid
		const MANALCXPRICETHBid= MANALCXPRICUSDCEBid / ETHUSDCBid
		const MANALCXPRICETHAsk= MANALCXPRICUSDCEAsk / ETHUSDCBid
		
		const MATICLCXPRICUSDCEBid= LCXUSDCBid * MATICLCXBid
		const MATICLCXPRICUSDCEAsk= LCXUSDCBid * MATICLCXAsk
		const MATICLCXPRICEURBid= LCXEURBid * MATICLCXBid
		const MATICLCXPRICEURAsk= LCXEURBid * MATICLCXAsk
		const MATICLCXPRICBTCBid= MATICLCXPRICUSDCEBid / BTCUSDCBid
		const MATICLCXPRICBTCAsk= MATICLCXPRICUSDCEAsk / BTCUSDCBid
		const MATICLCXPRICETHBid= MATICLCXPRICUSDCEBid / ETHUSDCBid
		const MATICLCXPRICETHAsk= MATICLCXPRICUSDCEAsk / ETHUSDCBid
		
		const MKRLCXPRICUSDCEBid= LCXUSDCBid * MKRLCXBid
		const MKRLCXPRICUSDCEAsk= LCXUSDCBid * MKRLCXAsk
		const MKRLCXPRICEURBid= LCXEURBid * MKRLCXBid
		const MKRLCXPRICEURAsk= LCXEURBid * MKRLCXAsk
		const MKRLCXPRICBTCBid= MKRLCXPRICUSDCEBid / BTCUSDCBid
		const MKRLCXPRICBTCAsk= MKRLCXPRICUSDCEAsk / BTCUSDCBid
		const MKRLCXPRICETHBid= MKRLCXPRICUSDCEBid / ETHUSDCBid
		const MKRLCXPRICETHAsk= MKRLCXPRICUSDCEAsk / ETHUSDCBid
		
		const NMKRLCXPRICUSDCEBid= LCXUSDCBid * NMKRLCXBid
		const NMKRLCXPRICUSDCEAsk= LCXUSDCBid * NMKRLCXAsk
		const NMKRLCXPRICEURBid= LCXEURBid * NMKRLCXBid
		const NMKRLCXPRICEURAsk= LCXEURBid * NMKRLCXAsk
		const NMKRLCXPRICBTCBid= NMKRLCXPRICUSDCEBid / BTCUSDCBid
		const NMKRLCXPRICBTCAsk= NMKRLCXPRICUSDCEAsk / BTCUSDCBid
		const NMKRLCXPRICETHBid= NMKRLCXPRICUSDCEBid / ETHUSDCBid
		const NMKRLCXPRICETHAsk= NMKRLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		
		const OGNLCXPRICUSDCEBid= LCXUSDCBid * OGNLCXBid
		const OGNLCXPRICUSDCEAsk= LCXUSDCBid * OGNLCXAsk
		const OGNLCXPRICEURBid= LCXEURBid * OGNLCXBid
		const OGNLCXPRICEURAsk= LCXEURBid * OGNLCXAsk
		const OGNLCXPRICBTCBid= OGNLCXPRICUSDCEBid / BTCUSDCBid
		const OGNLCXPRICBTCAsk= OGNLCXPRICUSDCEAsk / BTCUSDCBid
		const OGNLCXPRICETHBid= OGNLCXPRICUSDCEBid / ETHUSDCBid
		const OGNLCXPRICETHAsk= OGNLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const OPLCXPRICUSDCEBid= LCXUSDCBid * OPLCXBid
		const OPLCXPRICUSDCEAsk= LCXUSDCBid * OPLCXAsk
		const OPLCXPRICEURBid= LCXEURBid * OPLCXBid
		const OPLCXPRICEURAsk= LCXEURBid * OPLCXAsk
		const OPLCXPRICBTCBid= OPLCXPRICUSDCEBid / BTCUSDCBid
		const OPLCXPRICBTCAsk= OPLCXPRICUSDCEAsk / BTCUSDCBid
		const OPLCXPRICETHBid= OPLCXPRICUSDCEBid / ETHUSDCBid
		const OPLCXPRICETHAsk= OPLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const QNTLCXPRICUSDCEBid= LCXUSDCBid * QNTLCXBid
		const QNTLCXPRICUSDCEAsk= LCXUSDCBid * QNTLCXAsk
		const QNTLCXPRICEURBid= LCXEURBid * QNTLCXBid
		const QNTLCXPRICEURAsk= LCXEURBid * QNTLCXAsk
		const QNTLCXPRICBTCBid= QNTLCXPRICUSDCEBid / BTCUSDCBid
		const QNTLCXPRICBTCAsk= QNTLCXPRICUSDCEAsk / BTCUSDCBid
		const QNTLCXPRICETHBid= QNTLCXPRICUSDCEBid / ETHUSDCBid
		const QNTLCXPRICETHAsk= QNTLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const REVVLCXPRICUSDCEBid= LCXUSDCBid * REVVLCXBid
		const REVVLCXPRICUSDCEAsk= LCXUSDCBid * REVVLCXAsk
		const REVVLCXPRICEURBid= LCXEURBid * REVVLCXBid
		const REVVLCXPRICEURAsk= LCXEURBid * REVVLCXAsk
		const REVVLCXPRICBTCBid= REVVLCXPRICUSDCEBid / BTCUSDCBid
		const REVVLCXPRICBTCAsk= REVVLCXPRICUSDCEAsk / BTCUSDCBid
		const REVVLCXPRICETHBid= REVVLCXPRICUSDCEBid / ETHUSDCBid
		const REVVLCXPRICETHAsk= REVVLCXPRICUSDCEAsk / ETHUSDCBid
		
		
		const SANDLCXPRICUSDCEBid= LCXUSDCBid * SANDLCXBid
		const SANDLCXPRICUSDCEAsk= LCXUSDCBid * SANDLCXAsk
		const SANDLCXPRICEURBid= LCXEURBid * SANDLCXBid
		const SANDLCXPRICEURAsk= LCXEURBid * SANDLCXAsk
		const SANDLCXPRICBTCBid= SANDLCXPRICUSDCEBid / BTCUSDCBid
		const SANDLCXPRICBTCAsk= SANDLCXPRICUSDCEAsk / BTCUSDCBid
		const SANDLCXPRICETHBid= SANDLCXPRICUSDCEBid / ETHUSDCBid
		const SANDLCXPRICETHAsk= SANDLCXPRICUSDCEAsk / ETHUSDCBid
		
		const VISLCXPRICUSDCEBid= LCXUSDCBid * VISLCXBid
		const VISLCXPRICUSDCEAsk= LCXUSDCBid * VISLCXAsk
		const VISLCXPRICEURBid= LCXEURBid * VISLCXBid
		const VISLCXPRICEURAsk= LCXEURBid * VISLCXAsk
		const VISLCXPRICBTCBid= VISLCXPRICUSDCEBid / BTCUSDCBid
		const VISLCXPRICBTCAsk= VISLCXPRICUSDCEAsk / BTCUSDCBid
		const VISLCXPRICETHBid= VISLCXPRICUSDCEBid / ETHUSDCBid
		const VISLCXPRICETHAsk= VISLCXPRICUSDCEAsk / ETHUSDCBid
		
  const TIALCXPRICUSDCEBid= LCXUSDCBid * TIALCXBid
		const TIALCXPRICUSDCEAsk= LCXUSDCBid * TIALCXAsk
		const TIALCXPRICEURBid= LCXEURBid * TIALCXBid
		const TIALCXPRICEURAsk= LCXEURBid * TIALCXAsk
		const TIALCXPRICBTCBid= TIALCXPRICUSDCEBid / BTCUSDCBid
		const TIALCXPRICBTCAsk= TIALCXPRICUSDCEAsk / BTCUSDCBid
		const TIALCXPRICETHBid= TIALCXPRICUSDCEBid / ETHUSDCBid
		const TIALCXPRICETHAsk= TIALCXPRICUSDCEAsk / ETHUSDCBid


		const TIAETHLCXBID = TIAETHBid * ETHUSDCBid / LCXUSDCBid
		const TIAETHLCXASK = TIAETHAsk * ETHUSDCBid / LCXUSDCBid

		const TIAETHLCXBIDUSD = TIAETHBid * ETHUSDCBid 
		const TIAETHLCXASKUSD = TIAETHAsk * ETHUSDCBid 
		const TIAETHLCXBIDEUR = TIAETHBid * ETHEURBid 
		const TIAETHLCXASKEUR = TIAETHAsk * ETHEURBid 

		const TIAEURLCXBID = TIAEURBid / LCXEURBid
		const TIAEURLCXASK = TIAEURAsk / LCXEURBid



  
 		const UNILCXPRICUSDCEBid= LCXUSDCBid * UNILCXBid
		const UNILCXPRICUSDCEAsk= LCXUSDCBid * UNILCXAsk
		const UNILCXPRICEURBid= LCXEURBid * UNILCXBid
		const UNILCXPRICEURAsk= LCXEURBid * UNILCXAsk
		const UNILCXPRICBTCBid= UNILCXPRICUSDCEBid / BTCUSDCBid
		const UNILCXPRICBTCAsk= UNILCXPRICUSDCEAsk / BTCUSDCBid
		const UNILCXPRICETHBid= UNILCXPRICUSDCEBid / ETHUSDCBid
		const UNILCXPRICETHAsk= UNILCXPRICUSDCEAsk / ETHUSDCBid



		const LCXUSDCETHBid= LCXUSDCBid / ETHUSDCBid
		const LCXUSDCETHAsk= LCXUSDCAsk / ETHUSDCBid


  
  
		const binanceUrl = "https://www.binance.com/api/v3/ticker/price?symbol=ADAUSDT"
		const binanceResponse = await fetch(binanceUrl)
		const binanceData = await binanceResponse.json()
		const ADAUSDTPrice = binanceData.price
		
		const DIFADABid = ADAUSDTPrice - ADALCXPRICUSDCEBid
		const DIFADAAsk = ADAUSDTPrice - ADALCXPRICUSDCEAsk

		const LCXUSDEURBID = LCXUSDCBid * USDCEURBid
		const LCXUSDEURASK = LCXUSDCAsk * USDCEURBid


		


		
  
    const tableBody = document.querySelector('#prices tbody')
    tableBody.innerHTML += 
	
      `

	  

	  <tr>
        <td style="color:yellow;">BTCUSDCBid</td>
        <td style="color:green;">${BTCUSDCBid}</td>
        <td style="color:red;">${BTCUSDCAsk}</td>

		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;"></td>
      


        <td style="color:green;">${LCXUSDCETHBid.toFixed(07)}</td>
        <td style="color:red;">${LCXUSDCETHAsk.toFixed(07)}</td>


      </tr>

	  
	  <tr>
        <td style="color:yellow;">LCXUSDC</td>
        <td style="color:green;">${LCXUSDCBid}</td>
        <td style="color:red;">${LCXUSDCAsk}</td>

		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;"></td>
        <td style="color:red;">${LCXUSDEURBID.toFixed(04)}</td>
		<td style="color:red;">${LCXUSDEURASK.toFixed(04)}</td>
		<td style="color:red;"></td>
		<td style="color:red;"></td>


        <td style="color:green;">${LCXUSDCETHBid.toFixed(07)}</td>
        <td style="color:red;">${LCXUSDCETHAsk.toFixed(07)}</td>


      </tr>
	  

	  <tr>
	  <td style="color:yellow;">USDCEUR</td>
	  <td style="color:green;">${USDCEURBid}</td>
	  <td style="color:red;">${USDCEURAsk}</td>
	
	
	<tr>
        <td>ADA/LCX</td>
        <td style="color:green;">${ADALCXBid}</td>
        <td style="color:red;">${ADALCXAsk}</td>
		<td style="color:green;">${ADALCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${ADALCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> ${ADAUSDTPrice} </td>
		<td style="color:#073500;">${DIFADABid.toFixed(03)}</td>
		<td style="color:#055500;"> ${DIFADAAsk.toFixed(03)}</td>
		<td style="color:green;">${ADALCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${ADALCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${ADALCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${ADALCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${ADALCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${ADALCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
	
	  
	 
	  <tr>
        <td>AMP/LCX</td>
        <td style="color:green;">${AMPLCXBid}</td>
        <td style="color:red;">${AMPLCXAsk}</td>
		<td style="color:green;">${AMPLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${AMPLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${AMPLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${AMPLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${AMPLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${AMPLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${AMPLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${AMPLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
      
	   <tr>
        <td>ATRI/LCX</td>
        <td style="color:green;">${ATRILCXBid}</td>
        <td style="color:red;">${ATRILCXAsk}</td>
		<td style="color:green;">${ATRILCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${ATRILCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${ATRILCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${ATRILCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${ATRILCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${ATRILCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${ATRILCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${ATRILCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
      
	 
      
	   <tr>
        <td>BAT/LCX</td>
        <td style="color:green;">${BATLCXBid}</td>
        <td style="color:red;">${BATLCXAsk}</td>
		<td style="color:green;">${BATLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${BATLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${BATLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${BATLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${BATLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${BATLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${BATLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${BATLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
      
	   <tr>
        <td>BCH/LCX</td>
        <td style="color:green;">${BCHLCXBid}</td>
        <td style="color:red;">${BCHLCXAsk}</td>
		<td style="color:green;">${BCHLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${BCHLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${BCHLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${BCHLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${BCHLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${BCHLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${BCHLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${BCHLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
     
	  
	  
	  
	 
	   <tr>
        <td>CELO/LCX</td>
        <td style="color:green;">${CELOLCXBid}</td>
        <td style="color:red;">${CELOLCXAsk}</td>
		<td style="color:green;">${CELOLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${CELOLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${CELOLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${CELOLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${CELOLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${CELOLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${CELOLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${CELOLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>

	  
 
 <tr>
        <td>DAG/LCX</td>
        <td style="color:green;">${DAGLCXBid}</td>
        <td style="color:red;">${DAGLCXAsk}</td>
		<td style="color:green;">${DAGLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${DAGLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${DAGLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${DAGLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${DAGLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${DAGLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${DAGLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${DAGLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 
<tr>
         <tr>
        <td>DGB/LCX</td>
        <td style="color:green;">${DGBLCXBid}</td>
        <td style="color:red;">${DGBLCXAsk}</td>
		<td style="color:green;">${DGBLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${DGBLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${DGBLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${DGBLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${DGBLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${DGBLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${DGBLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${DGBLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 
 <tr>
        <td>DGMV/LCX</td>
        <td style="color:green;">${DGMVLCXBid}</td>
        <td style="color:red;">${DGMVLCXAsk}</td>
		<td style="color:green;">${DGMVLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${DGMVLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${DGMVLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${DGMVLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${DGMVLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${DGMVLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${DGMVLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${DGMVLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
   
 
 <tr>
        <td>DOGE/LCX</td>
        <td style="color:green;">${DOGELCXBid}</td>
        <td style="color:red;">${DOGELCXAsk}</td>
		<td style="color:green;">${DOGELCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${DOGELCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${DOGELCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${DOGELCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${DOGELCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${DOGELCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${DOGELCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${DOGELCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>DOT/LCX</td>
        <td style="color:green;">${DOTLCXBid}</td>
        <td style="color:red;">${DOTLCXAsk}</td>
		<td style="color:green;">${DOTLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${DOTLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${DOTLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${DOTLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${DOTLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${DOTLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${DOTLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${DOTLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>ENJ/LCX</td>
        <td style="color:green;">${ENJLCXBid}</td>
        <td style="color:red;">${ENJLCXAsk}</td>
		<td style="color:green;">${ENJLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${ENJLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${ENJLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${ENJLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${ENJLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${ENJLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${ENJLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${ENJLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 <tr>
        <td>ETHW/LCX</td>
        <td style="color:green;">${ETHWLCXBid}</td>
        <td style="color:red;">${ETHWLCXAsk}</td>
		<td style="color:green;">${ETHWLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${ETHWLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${ETHWLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${ETHWLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${ETHWLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${ETHWLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${ETHWLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${ETHWLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>HBAR/LCX</td>
        <td style="color:green;">${HBARLCXBid}</td>
        <td style="color:red;">${HBARLCXAsk}</td>
		<td style="color:green;">${HBARLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${HBARLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${HBARLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${HBARLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${HBARLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${HBARLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${HBARLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${HBARLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>HOT/LCX</td>
        <td style="color:green;">${HOTLCXBid}</td>
        <td style="color:red;">${HOTLCXAsk}</td>
		<td style="color:green;">${HOTLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${HOTLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${HOTLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${HOTLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${HOTLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${HOTLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${HOTLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${HOTLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>LINK/LCX</td>
        <td style="color:green;">${LINKLCXBid}</td>
        <td style="color:red;">${LINKLCXAsk}</td>
		<td style="color:green;">${LINKLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${LINKLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${LINKLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${LINKLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${LINKLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${LINKLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${LINKLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${LINKLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>LTC/LCX</td>
        <td style="color:green;">${LTCLCXBid}</td>
        <td style="color:red;">${LTCLCXAsk}</td>
		<td style="color:green;">${LTCLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${LTCLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${LTCLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${LTCLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${LTCLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${LTCLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${LTCLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${LTCLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 <tr>
        <td>MANA/LCX</td>
        <td style="color:green;">${MANALCXBid}</td>
        <td style="color:red;">${MANALCXAsk}</td>
		<td style="color:green;">${MANALCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${MANALCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${MANALCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${MANALCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${MANALCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${MANALCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${MANALCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${MANALCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>MATIC/LCX</td>
        <td style="color:green;">${MATICLCXBid}</td>
        <td style="color:red;">${MATICLCXAsk}</td>
		<td style="color:green;">${MATICLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${MATICLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${MATICLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${MATICLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${MATICLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${MATICLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${MATICLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${MATICLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>MKR/LCX</td>
        <td style="color:green;">${MKRLCXBid}</td>
        <td style="color:red;">${MKRLCXAsk}</td>
		<td style="color:green;">${MKRLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${MKRLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${MKRLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${MKRLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${MKRLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${MKRLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${MKRLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${MKRLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 


 
 <tr>
        <td>NMKR/LCX</td>
        <td style="color:green;">${NMKRLCXBid}</td>
        <td style="color:red;">${NMKRLCXAsk}</td>
		<td style="color:green;">${NMKRLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${NMKRLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${NMKRLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${NMKRLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${NMKRLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${NMKRLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${NMKRLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${NMKRLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 

        
 
 <tr>
        <td>OGN/LCX</td>
        <td style="color:green;">${OGNLCXBid}</td>
        <td style="color:red;">${OGNLCXAsk}</td>
		<td style="color:green;">${OGNLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${OGNLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${OGNLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${OGNLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${OGNLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${OGNLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${OGNLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${OGNLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>OP/LCX</td>
        <td style="color:green;">${OPLCXBid}</td>
        <td style="color:red;">${OPLCXAsk}</td>
		<td style="color:green;">${OPLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${OPLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${OPLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${OPLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${OPLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${OPLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${OPLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${OPLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 

 
 <tr>
        <td>QNT/LCX</td>
        <td style="color:green;">${QNTLCXBid}</td>
        <td style="color:red;">${QNTLCXAsk}</td>
		<td style="color:green;">${QNTLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${QNTLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${QNTLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${QNTLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${QNTLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${QNTLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${QNTLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${QNTLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
 


 <tr>
        <td>REVV/LCX</td>
        <td style="color:green;">${REVVLCXBid}</td>
        <td style="color:red;">${REVVLCXAsk}</td>
		<td style="color:green;">${REVVLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${REVVLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${REVVLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${REVVLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${REVVLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${REVVLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${REVVLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${REVVLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>



 <tr>
        <td>SAND/LCX</td>
        <td style="color:green;">${SANDLCXBid}</td>
        <td style="color:red;">${SANDLCXAsk}</td>
		<td style="color:green;">${SANDLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${SANDLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${SANDLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${SANDLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${SANDLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${SANDLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${SANDLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${SANDLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>





 <tr>
        <td>VIS/LCX</td>
        <td style="color:green;">${VISLCXBid}</td>
        <td style="color:red;">${VISLCXAsk}</td>
		<td style="color:green;">${VISLCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${VISLCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${VISLCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${VISLCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${VISLCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${VISLCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${VISLCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${VISLCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>



 <tr>
        <td>TIA/LCX</td>
        <td style="color:green;">${TIALCXBid}</td>
        <td style="color:red;">${TIALCXAsk}</td>
		<td style="color:green;">${TIALCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${TIALCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${TIALCXPRICEURBid.toFixed(04)}</td>
        <td style="color:red;">${TIALCXPRICEURAsk.toFixed(04)}</td>
		
		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;">${TIALCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${TIALCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>



	  <tr>
        <td>TIA/ETH</td>
        <td style="color:green;">${TIAETHLCXBID.toFixed(03)}</td>
        <td style="color:red;">${TIAETHLCXASK.toFixed(03)}</td>
		<td style="color:green;">${TIAETHLCXBIDUSD.toFixed(05)}</td>
        <td style="color:red;">${TIAETHLCXASKUSD.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${TIAETHLCXBIDEUR.toFixed(04)}</td>
        <td style="color:red;">${TIAETHLCXASKEUR.toFixed(04)}</td>
		
		<td style="color:green;"></td>
        <td style="color:red;"></td>
		<td style="color:green;">${TIAETHBid.toFixed(08)}</td>
        <td style="color:red;">${TIAETHAsk.toFixed(08)}</td>
		
		
      </tr>

	  <tr>
	  <td>TIA/EUR</td>
	  <td style="color:green;">${TIAEURLCXBID.toFixed(04)}</td>
	  <td style="color:red;">${TIAEURLCXASK.toFixed(04)}</td>
	  <td style="color:green;"></td>
	  <td style="color:red;"></td>
	  <td style="color:#013370;"> xxx </td>
	  <td style="color:#073500;"> yyy </td>
	  <td style="color:#055500;"> zzz </td>
	  <td style="color:green;">${TIAEURBid.toFixed(04)}</td>
	  <td style="color:red;">${TIAEURAsk.toFixed(04)}</td>
	  
	  <td style="color:green;"></td>
	  <td style="color:red;"></td>
	  <td style="color:green;"></td>
	  <td style="color:red;"></td>
	  
	  
	</tr>


 <tr>
        <td>UNI/LCX</td>
        <td style="color:green;">${UNILCXBid}</td>
        <td style="color:red;">${UNILCXAsk}</td>
		<td style="color:green;">${UNILCXPRICUSDCEBid.toFixed(05)}</td>
        <td style="color:red;">${UNILCXPRICUSDCEAsk.toFixed(05)}</td>
		<td style="color:#013370;"> xxx </td>
		<td style="color:#073500;"> yyy </td>
		<td style="color:#055500;"> zzz </td>
		<td style="color:green;">${UNILCXPRICEURBid.toFixed(03)}</td>
        <td style="color:red;">${UNILCXPRICEURAsk.toFixed(03)}</td>
		
		<td style="color:green;">${UNILCXPRICBTCBid.toFixed(08)}</td>
        <td style="color:red;">${UNILCXPRICBTCAsk.toFixed(08)}</td>
		<td style="color:green;">${UNILCXPRICETHBid.toFixed(08)}</td>
        <td style="color:red;">${UNILCXPRICETHAsk.toFixed(08)}</td>
		
		
      </tr>
	  `
    
  }
  
  init()