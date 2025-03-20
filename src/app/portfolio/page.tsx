import { Suspense } from 'react';

export default function PortfolioPage() {
  function PortfolioHoldings() {
    return (
      <div className="bg-card rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Current Holdings</h2>
          <button className="text-sm bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90">
            Add Position
          </button>
        </div>
        <p className="text-muted-foreground mb-4">This section will display your current holdings with detailed metrics.</p>
        <div className="h-40 border border-dashed border-muted-foreground/50 rounded-md flex items-center justify-center">
          <p className="text-muted-foreground">Portfolio holdings will be displayed here</p>
        </div>
      </div>
    );
  }

  function TradeHistory() {
    return (
      <div className="bg-card rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Trade History</h2>
        <p className="text-muted-foreground mb-4">This section will display your trade history with performance metrics.</p>
        <div className="h-40 border border-dashed border-muted-foreground/50 rounded-md flex items-center justify-center">
          <p className="text-muted-foreground">Trade history will be displayed here</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
        
        <div className="space-y-8">
          {/* This will be replaced with the actual component when implemented */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Total Value</div>
                <div className="text-2xl font-bold">$25,420.75</div>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">24h Change</div>
                <div className="text-2xl font-bold text-green-500">+$1,250.50 (5.18%)</div>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Total Yield (30d)</div>
                <div className="text-2xl font-bold text-green-500">$320.45</div>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Buffett Score</div>
                <div className="text-2xl font-bold">78/100</div>
              </div>
            </div>
          </div>
          
          <Suspense fallback={<div className="h-80 bg-card animate-pulse rounded-lg"></div>}>
            <PortfolioHoldings />
          </Suspense>
          
          <Suspense fallback={<div className="h-80 bg-card animate-pulse rounded-lg"></div>}>
            <TradeHistory />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
