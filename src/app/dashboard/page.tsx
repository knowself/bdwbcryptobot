import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Suspense fallback={<div className="h-40 bg-card animate-pulse rounded-lg"></div>}>
            {/* Portfolio Summary Card */}
            <div className="bg-card rounded-lg p-6 shadow-md h-full">
              <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">$25,420.75</div>
                  <div className="flex items-center text-green-500">
                    <span>+$1,250.50</span>
                    <span className="ml-1">(5.18%)</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Assets</span>
                    <span>8</span>
                  </div>
                  
                  <div className="mt-4">
                    <button className="text-sm text-primary hover:underline">
                      View Portfolio →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="h-40 bg-card animate-pulse rounded-lg"></div>}>
            {/* Market Sentiment Card */}
            <div className="bg-card rounded-lg p-6 shadow-md h-full">
              <h2 className="text-xl font-semibold mb-4">Market Sentiment</h2>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">
                    25
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Fear & Greed Index: Fear
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div>
                    <div className="text-sm text-muted-foreground">BTC Dominance</div>
                    <div className="font-medium">52.4%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">PulseChain TVL</div>
                    <div className="font-medium">$1.85B</div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="h-40 bg-card animate-pulse rounded-lg"></div>}>
            <div className="bg-card rounded-lg p-6 shadow-md h-full">
              <h2 className="text-xl font-semibold mb-4">Blood in the Streets</h2>
              <div className="flex items-center justify-center h-24">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">Inactive</div>
                  <p className="text-sm text-muted-foreground">Market conditions normal</p>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Suspense fallback={<div className="h-80 bg-card animate-pulse rounded-lg"></div>}>
            {/* Watchlist Preview */}
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
                    {/* Sample data row */}
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <div className="font-medium">PLS</div>
                        <div className="text-xs text-muted-foreground">PulseChain</div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        $0.000120
                      </td>
                      <td className="py-3 px-4 text-right text-red-600">
                        -2.50%
                      </td>
                      <td className="py-3 px-4 text-right text-yellow-500">
                        0.75
                      </td>
                      <td className="py-3 px-4 text-right text-green-600">
                        8.2%
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          82/100
                        </div>
                      </td>
                    </tr>
                    {/* Add more sample rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
