'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useState } from 'react';

interface Asset {
  symbol: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  marketCap: number;
  defiYield: number;
  undervalued: boolean;
  incomeReady: boolean;
  appreciationPotential: boolean;
  buySignal: boolean;
}

interface MarketData {
  timestamp: string;
  assets: Asset[];
  summary: string;
}

interface TradingSignal {
  timestamp: string;
  symbol: string;
  signalType: string;
  price: number;
  confidence: number;
  reasoning: string;
  executed: boolean;
}

export function MarketDataDisplay() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  
  // Fetch the latest market data
  const marketData = useQuery(api.market.getLatestMarketData) as MarketData | null;
  
  // Fetch trading signals for the selected asset
  const tradingSignals = useQuery(
    api.market.getTradingSignalsForAsset,
    selectedAsset ? { symbol: selectedAsset } : 'skip'
  ) as TradingSignal[] | null;
  
  if (!marketData) {
    return (
      <div className="text-center py-10">
        <p>No market data available yet. The first analysis will run soon.</p>
      </div>
    );
  }
  
  const { timestamp, assets, summary } = marketData;
  const formattedTime = new Date(timestamp).toLocaleString();
  
  return (
    <div className="space-y-8">
      <div className="bg-card rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Latest Market Analysis</h2>
          <span className="text-sm text-muted-foreground">{formattedTime}</span>
        </div>
        
        <p className="mb-6">{summary}</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Asset</th>
                <th className="py-2 px-4 text-right">Price</th>
                <th className="py-2 px-4 text-right">24h Change</th>
                <th className="py-2 px-4 text-right">DeFi Yield</th>
                <th className="py-2 px-4 text-center">Signal</th>
                <th className="py-2 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset: Asset) => (
                <tr key={asset.symbol} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">{asset.symbol}</td>
                  <td className="py-3 px-4 text-right">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className={`py-3 px-4 text-right ${asset.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.priceChange24h >= 0 ? '+' : ''}{asset.priceChange24h.toFixed(2)}%
                  </td>
                  <td className="py-3 px-4 text-right">{asset.defiYield.toFixed(2)}%</td>
                  <td className="py-3 px-4 text-center">
                    {asset.buySignal ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        BUY
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                        HOLD
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setSelectedAsset(asset.symbol)}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedAsset && (
        <div className="bg-card rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{selectedAsset} Analysis</h2>
            <button 
              onClick={() => setSelectedAsset(null)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>
          
          {/* Asset details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {assets
              .filter(asset => asset.symbol === selectedAsset)
              .map((asset: Asset) => {
                const conditions = [
                  { name: 'Undervalued', met: asset.undervalued },
                  { name: 'Income Ready', met: asset.incomeReady },
                  { name: 'Appreciation Potential', met: asset.appreciationPotential }
                ];
                
                return (
                  <div key={asset.symbol} className="space-y-4">
                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-medium mb-2">Market Data</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="text-right">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="text-muted-foreground">24h Change:</span>
                        <span className={`text-right ${asset.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {asset.priceChange24h >= 0 ? '+' : ''}{asset.priceChange24h.toFixed(2)}%
                        </span>
                        <span className="text-muted-foreground">Market Cap:</span>
                        <span className="text-right">${(asset.marketCap / 1000000000).toFixed(2)}B</span>
                        <span className="text-muted-foreground">Volume (24h):</span>
                        <span className="text-right">${(asset.volume24h / 1000000).toFixed(2)}M</span>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-medium mb-2">DeFi Yield</h3>
                      <div className="text-3xl font-bold text-center">{asset.defiYield.toFixed(2)}%</div>
                      <div className="text-center text-sm text-muted-foreground mt-1">Average APY</div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-medium mb-2">Buffett Criteria</h3>
                      <div className="space-y-2">
                        {conditions.map(condition => (
                          <div key={condition.name} className="flex items-center justify-between">
                            <span className="text-sm">{condition.name}</span>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${condition.met ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}>
                              {condition.met ? 'Yes' : 'No'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            
            {/* Trading signals */}
            <div className="md:col-span-2 bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-4">Recent Trading Signals</h3>
              {tradingSignals && tradingSignals.length > 0 ? (
                <div className="space-y-3">
                  {tradingSignals.map((signal: TradingSignal, index: number) => (
                    <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${signal.signalType === 'buy' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}>
                          {signal.signalType.toUpperCase()}
                        </span>
                        <span className="text-sm text-muted-foreground">{new Date(signal.timestamp).toLocaleString()}</span>
                      </div>
                      <div className="mt-1 text-sm">{signal.reasoning}</div>
                      <div className="mt-2 flex justify-between text-sm">
                        <span>Price: ${signal.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span>Confidence: {(signal.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No recent trading signals for {selectedAsset}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
