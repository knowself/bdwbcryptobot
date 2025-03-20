'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export function PortfolioSummary() {
  // This will be replaced with actual data from the Convex DB
  // For now, we'll use placeholder data to test the UI
  const portfolioData = {
    totalValue: 25420.75,
    change24h: 1250.50,
    changePercent: 5.18,
    assets: 8,
  };
  
  // Uncomment when the API is implemented
  // const portfolioData = useQuery(api.portfolio.getSummary);
  // if (!portfolioData) {
  //   return (
  //     <div className="bg-card rounded-lg p-6 shadow-md h-full flex items-center justify-center">
  //       <p className="text-muted-foreground">Loading portfolio data...</p>
  //     </div>
  //   );
  // }
  
  return (
    <div className="bg-card rounded-lg p-6 shadow-md h-full">
      <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
      
      <div className="space-y-4">
        <div>
          <div className="text-3xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
          <div className={`flex items-center ${portfolioData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span>{portfolioData.change24h >= 0 ? '+' : ''}{portfolioData.change24h.toLocaleString()}</span>
            <span className="ml-1">({portfolioData.changePercent.toFixed(2)}%)</span>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Assets</span>
            <span>{portfolioData.assets}</span>
          </div>
          
          <div className="mt-4">
            <button className="text-sm text-primary hover:underline">
              View Portfolio →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
