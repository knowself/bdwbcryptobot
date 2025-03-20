import { Suspense } from 'react';
import { MarketDataDisplay } from './market-data-display';

export default function MarketPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">The Market</h1>
        <p className="text-lg mb-6">
          Our Buffett-inspired crypto market analysis runs every 5 minutes to identify undervalued assets 
          with strong fundamentals and passive income potential.
        </p>
        
        <Suspense fallback={<div className="text-center py-10">Loading market data...</div>}>
          <MarketDataDisplay />
        </Suspense>
      </div>
    </main>
  );
}
