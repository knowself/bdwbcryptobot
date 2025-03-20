/**
 * This file contains functions to fetch cryptocurrency data from external APIs
 */

// Function to fetch current market data for specified cryptocurrencies
export async function fetchMarketData(symbols: string[] = ["BTC", "ETH", "SOL", "ADA"]) {
  try {
    // In a real implementation, you would use a proper API like CoinGecko, CoinMarketCap, etc.
    // For example with CoinGecko:
    // const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${symbols.join(',')}&order=market_cap_desc`);
    
    // For now, we'll return mock data
    const mockData = symbols.map(symbol => ({
      symbol,
      price: getRandomPrice(symbol),
      volume24h: Math.random() * 1000000000,
      marketCap: Math.random() * 10000000000,
      priceChange24h: (Math.random() * 10) - 5, // -5% to +5%
    }));
    
    return {
      success: true,
      data: mockData,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("Error fetching market data:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString()
    };
  }
}

// Function to fetch historical price data
export async function fetchHistoricalData(symbol: string, days: number = 30) {
  try {
    // In a real implementation, you would use a proper API
    // For example with CoinGecko:
    // const response = await fetch(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${days}`);
    
    // For now, we'll return mock data
    const mockData = Array.from({ length: days }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (days - i));
      
      return {
        timestamp: date.toISOString(),
        price: getRandomPrice(symbol, 0.8, 1.2), // Some random variation
        volume: Math.random() * 1000000000
      };
    });
    
    return {
      success: true,
      data: mockData,
      symbol
    };
  } catch (error) {
    console.error(`Error fetching historical data for ${symbol}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      symbol
    };
  }
}

// Function to fetch DeFi yield data
export async function fetchDefiYields(assets: string[] = ["BTC", "ETH", "SOL", "ADA"]) {
  try {
    // In a real implementation, you would use a proper API or aggregator
    // For example, you might query DeFi Llama API or similar services
    
    // For now, we'll return mock data
    const mockData = assets.map(asset => ({
      asset,
      protocols: [
        {
          name: "Aave",
          apy: asset === "ETH" ? 3.2 : (Math.random() * 5 + 1), // 1-6%
          tvl: Math.random() * 1000000000
        },
        {
          name: "Compound",
          apy: asset === "ETH" ? 2.8 : (Math.random() * 4 + 0.5), // 0.5-4.5%
          tvl: Math.random() * 800000000
        },
        {
          name: "Curve",
          apy: asset === "ETH" ? 4.1 : (Math.random() * 8 + 2), // 2-10%
          tvl: Math.random() * 500000000
        }
      ],
      averageYield: asset === "ETH" ? 3.4 : (Math.random() * 6 + 1) // 1-7%
    }));
    
    return {
      success: true,
      data: mockData,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("Error fetching DeFi yields:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString()
    };
  }
}

// Helper function to generate somewhat realistic prices for different cryptocurrencies
function getRandomPrice(symbol: string, minMultiplier = 0.95, maxMultiplier = 1.05) {
  const basePrice = {
    "BTC": 60000,
    "ETH": 3000,
    "SOL": 120,
    "ADA": 0.5,
    "DOT": 15,
    "AVAX": 35,
    "MATIC": 1.2,
  }[symbol] || 10; // Default to $10 for unknown symbols
  
  const randomMultiplier = minMultiplier + Math.random() * (maxMultiplier - minMultiplier);
  return basePrice * randomMultiplier;
}
