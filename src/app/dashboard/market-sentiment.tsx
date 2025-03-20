'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export function MarketSentiment() {
  // This will be replaced with actual data from the Convex DB
  // For now, we'll use placeholder data to test the UI
  const sentimentData = {
    fearGreedIndex: 25,
    sentiment: 'Fear',
    btcDominance: 52.4,
    pulseChainTVL: 1.85, // in billions
  };
  
  // Uncomment when the API is implemented
  // const sentimentData = useQuery(api.market.getSentimentData);
  // if (!sentimentData) {
  //   return (
  //     <div className="bg-card rounded-lg p-6 shadow-md h-full flex items-center justify-center">
  //       <p className="text-muted-foreground">Loading sentiment data...</p>
  //     </div>
  //   );
  // }
  
  // Function to determine the color based on the Fear & Greed index
  const getFearGreedColor = (index: number) => {
    if (index <= 20) return 'text-red-600'; // Extreme Fear
    if (index <= 40) return 'text-orange-500'; // Fear
    if (index <= 60) return 'text-yellow-500'; // Neutral
    if (index <= 80) return 'text-green-500'; // Greed
    return 'text-green-700'; // Extreme Greed
  };
  
  return (
    <div className="bg-card rounded-lg p-6 shadow-md h-full">
      <h2 className="text-xl font-semibold mb-4">Market Sentiment</h2>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className={`text-3xl font-bold ${getFearGreedColor(sentimentData.fearGreedIndex)}`}>
            {sentimentData.fearGreedIndex}
          </div>
          <div className="text-sm text-muted-foreground">
            Fear & Greed Index: {sentimentData.sentiment}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div>
            <div className="text-sm text-muted-foreground">BTC Dominance</div>
            <div className="font-medium">{sentimentData.btcDominance}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">PulseChain TVL</div>
            <div className="font-medium">${sentimentData.pulseChainTVL}B</div>
          </div>
        </div>
      </div>
    </div>
  );
}
