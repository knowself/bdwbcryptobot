'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

interface WatchlistAsset {
  symbol: string;
  name: string;
  price: number;
  priceChange24h: number;
  valueRatio: number;
  defiYield: number;
  buffettScore: number;
}

export function WatchlistPreview() {
  // This will be replaced with actual data from the Convex DB
  // For now, we'll use placeholder data to test the UI
  const watchlistData: WatchlistAsset[] = [
    {
      symbol: 'PLS',
      name: 'PulseChain',
      price: 0.00012,
      priceChange24h: -2.5,
      valueRatio: 0.75,
      defiYield: 8.2,
      buffettScore: 82
    },
    {
      symbol: 'PLSX',
      name: 'PulseX',
      price: 0.00008,
      priceChange24h: 1.2,
      valueRatio: 0.82,
      defiYield: 12.5,
      buffettScore: 78
    },
    {
      symbol: 'HEX',
      name: 'HEX',
      price: 0.00095,
      priceChange24h: -0.8,
      valueRatio: 0.68,
      defiYield: 15.3,
      buffettScore: 75
    },
    {
      symbol: 'INC',
      name: 'Incentive',
      price: 0.00003,
      priceChange24h: 5.7,
      valueRatio: 0.91,
      defiYield: 9.8,
      buffettScore: 88
    },
  ];
  
  // Uncomment when the API is implemented
  // const watchlistData = useQuery(api.watchlist.getTopAssets);
  // if (!watchlistData) {
  //   return (
  //     <div className="bg-card rounded-lg p-6 shadow-md h-full flex items-center justify-center">
  //       <p className="text-muted-foreground">Loading watchlist data...</p>
  //     </div>
  //   );
  // }
  
  // Function to determine color based on value ratio
  const getValueRatioColor = (ratio: number) => {
    if (ratio >= 0.9) return 'text-green-600'; // Extremely undervalued
    if (ratio >= 0.8) return 'text-green-500'; // Very undervalued
    if (ratio >= 0.7) return 'text-yellow-500'; // Undervalued
    return 'text-red-500'; // Not undervalued
  };
  
  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Watchlist</h2>
        <button className="text-sm text-primary hover:underline">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Asset</th>
              <th className="py-2 px-4 text-right">Price</th>
              <th className="py-2 px-4 text-right">24h</th>
              <th className="py-2 px-4 text-right">Value Ratio</th>
              <th className="py-2 px-4 text-right">DeFi Yield</th>
              <th className="py-2 px-4 text-center">Buffett Score</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData.map((asset) => (
              <tr key={asset.symbol} className="border-b hover:bg-muted/50">
                <td className="py-3 px-4">
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-xs text-muted-foreground">{asset.name}</div>
                </td>
                <td className="py-3 px-4 text-right">
                  ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 })}
                </td>
                <td className={`py-3 px-4 text-right ${asset.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {asset.priceChange24h >= 0 ? '+' : ''}{asset.priceChange24h.toFixed(2)}%
                </td>
                <td className={`py-3 px-4 text-right ${getValueRatioColor(asset.valueRatio)}`}>
                  {asset.valueRatio.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-right text-green-600">
                  {asset.defiYield.toFixed(1)}%
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {asset.buffettScore}/100
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
