import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { fetchMarketData, fetchDefiYields } from "./lib/cryptoApi";

// Query to get the latest market data
export const getLatestMarketData = query({
  handler: async (ctx) => {
    // Get the most recent market data entry
    const latestData = await ctx.db
      .query("marketData")
      .order("desc")
      .first();
    
    return latestData;
  },
});

// Query to get market data within a time range
export const getMarketDataInRange = query({
  args: {
    startTime: v.string(),
    endTime: v.string(),
  },
  handler: async (ctx, args) => {
    const { startTime, endTime } = args;
    
    // Get market data entries within the specified time range
    const dataInRange = await ctx.db
      .query("marketData")
      .filter(q => 
        q.and(
          q.gte(q.field("timestamp"), startTime),
          q.lte(q.field("timestamp"), endTime)
        )
      )
      .order("asc")
      .collect();
    
    return dataInRange;
  },
});

// Query to get the latest trading signals
export const getLatestTradingSignals = query({
  handler: async (ctx) => {
    // Get the most recent trading signals
    const latestSignals = await ctx.db
      .query("tradingSignals")
      .order("desc")
      .take(10);
    
    return latestSignals;
  },
});

// Query to get trading signals for a specific asset
export const getTradingSignalsForAsset = query({
  args: {
    symbol: v.string(),
  },
  handler: async (ctx, args) => {
    const { symbol } = args;
    
    // Get trading signals for the specified asset
    const signals = await ctx.db
      .query("tradingSignals")
      .filter(q => q.eq(q.field("symbol"), symbol))
      .order("desc")
      .take(20);
    
    return signals;
  },
});

// Mutation to manually trigger market data processing
// This can be used for testing or forcing an update outside the schedule
export const triggerMarketUpdate = mutation({
  handler: async (ctx) => {
    // Get current timestamp
    const now = new Date();
    const timestamp = now.toISOString();
    
    console.log(`Manual market update triggered at ${timestamp}`);
    
    // Call the actual market processing logic
    const result = await theMarketInternal(ctx);
    
    return {
      runId: result.runId,
      processedAt: timestamp,
      message: "Manual market data update processed successfully"
    };
  },
});

// The actual market processing function that runs every 5 minutes via cron
// This is exported as an internal function to be called by the cron job
export const theMarket = action({
  handler: async (ctx) => {
    return await theMarketInternal(ctx);
  },
});

// Internal helper function that contains the actual market processing logic
async function theMarketInternal(ctx: any) {
  // Get current timestamp
  const now = new Date();
  const timestamp = now.toISOString();
  
  console.log(`TheMarket function running at ${timestamp}`);
  
  try {
    // Step 1: Fetch cryptocurrency market data
    const targetAssets = ["BTC", "ETH", "SOL", "ADA", "DOT", "AVAX", "MATIC"];
    const marketDataResponse = await fetchMarketData(targetAssets);
    
    if (!marketDataResponse.success || !marketDataResponse.data) {
      throw new Error(`Failed to fetch market data: ${marketDataResponse.error || 'No data returned'}`);
    }
    
    // Step 2: Fetch DeFi yield data
    const yieldDataResponse = await fetchDefiYields(targetAssets);
    
    if (!yieldDataResponse.success || !yieldDataResponse.data) {
      throw new Error(`Failed to fetch yield data: ${yieldDataResponse.error || 'No data returned'}`);
    }
    
    // Step 3: Process and analyze the data using our Buffett-inspired strategy
    const processedAssets = marketDataResponse.data.map(asset => {
      const symbol = asset.symbol;
      
      // Find yield data for this asset
      const yieldData = yieldDataResponse.data.find(y => y.asset === symbol);
      const defiYield = yieldData ? yieldData.averageYield : 0;
      
      // Apply our Buffett-inspired strategy
      // These are simplified examples - in a real implementation, you would use more sophisticated analysis
      const undervalued = asset.priceChange24h < -5; // Asset is down more than 5%
      const incomeReady = defiYield >= 3.0; // Yield is at least 3%
      const appreciationPotential = asset.marketCap > 1000000000; // Market cap > $1B
      
      // Buy signal when all three conditions are met
      const buySignal = undervalued && incomeReady && appreciationPotential;
      
      return {
        ...asset,
        defiYield,
        undervalued,
        incomeReady,
        appreciationPotential,
        buySignal
      };
    });
    
    // Step 4: Store results in Convex database
    const marketDataId = await ctx.db.insert("marketData", {
      timestamp,
      assets: processedAssets,
      summary: `Analyzed ${processedAssets.length} assets, found ${processedAssets.filter(a => a.buySignal).length} buy signals`
    });
    
    // Step 5: Create trading signals for assets with buy signals
    for (const asset of processedAssets) {
      if (asset.buySignal) {
        await ctx.db.insert("tradingSignals", {
          timestamp,
          symbol: asset.symbol,
          signalType: "buy",
          price: asset.price,
          confidence: 0.7, // Example confidence score
          reasoning: `Asset is undervalued (${asset.priceChange24h}% change), has good yield (${asset.defiYield}%), and strong fundamentals.`,
          executed: false
        });
      }
    }
    
    // Record successful run
    const runId = await ctx.db.insert("marketRuns", {
      timestamp,
      status: "completed",
      message: `Processed ${processedAssets.length} assets, generated ${processedAssets.filter(a => a.buySignal).length} buy signals`
    });
    
    // Return summary of what was processed
    return {
      runId,
      processedAt: timestamp,
      assetsAnalyzed: processedAssets.length,
      buySignals: processedAssets.filter(a => a.buySignal).length,
      message: "Market data processed successfully"
    };
  } catch (error) {
    // Log and store the error
    console.error("Error in TheMarket function:", error);
    
    const runId = await ctx.db.insert("marketRuns", {
      timestamp,
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
    
    return {
      runId,
      processedAt: timestamp,
      error: error instanceof Error ? error.message : "Unknown error",
      message: "Market data processing failed"
    };
  }
}
