import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Table to store the results of each market data run
  marketRuns: defineTable({
    timestamp: v.string(),
    status: v.string(),
    message: v.optional(v.string()),
    error: v.optional(v.string()),
  }),
  
  // Table to store market data
  marketData: defineTable({
    timestamp: v.string(),
    assets: v.array(
      v.object({
        symbol: v.string(),
        price: v.number(),
        volume24h: v.number(),
        marketCap: v.optional(v.number()),
        priceChange24h: v.optional(v.number()),
        undervalued: v.optional(v.boolean()),
        incomeReady: v.optional(v.boolean()),
        appreciationPotential: v.optional(v.boolean()),
        defiYield: v.optional(v.number()),
        buySignal: v.optional(v.boolean()),
      })
    ),
    summary: v.optional(v.string()),
  }),
  
  // Table to store trading signals
  tradingSignals: defineTable({
    timestamp: v.string(),
    symbol: v.string(),
    signalType: v.string(), // "buy", "sell", "hold"
    price: v.number(),
    confidence: v.optional(v.number()),
    reasoning: v.optional(v.string()),
    executed: v.optional(v.boolean()),
  }),

  // PulseChain-specific assets and pairs
  pulseChainAssets: defineTable({
    symbol: v.string(),
    name: v.string(),
    address: v.string(), // Contract address
    type: v.string(), // "token", "LP", "NFT", etc.
    decimals: v.number(),
    isVerified: v.boolean(),
    createdAt: v.string(),
    description: v.optional(v.string()),
    website: v.optional(v.string()),
    twitter: v.optional(v.string()),
    telegram: v.optional(v.string()),
    isTracked: v.boolean(), // Whether we're actively tracking this asset
    tags: v.optional(v.array(v.string())), // Categories like "DeFi", "Gaming", etc.
    fundamentalScore: v.optional(v.number()), // 0-100 score based on our Buffett criteria
  }).index("by_symbol", ["symbol"]),

  // Trading pairs on PulseChain DEXes
  tradingPairs: defineTable({
    pairAddress: v.string(),
    token0: v.string(), // Symbol of token0
    token1: v.string(), // Symbol of token1
    token0Address: v.string(),
    token1Address: v.string(),
    exchange: v.string(), // "PulseX", "PulseDex", etc.
    liquidity: v.number(),
    volume24h: v.optional(v.number()),
    createdAt: v.string(),
    isTracked: v.boolean(),
  }).index("by_tokens", ["token0", "token1"]),

  // Historical price data with technical indicators
  priceHistory: defineTable({
    symbol: v.string(),
    timestamp: v.string(),
    timeframe: v.string(), // "1m", "5m", "15m", "1h", "4h", "1d"
    open: v.number(),
    high: v.number(),
    low: v.number(),
    close: v.number(),
    volume: v.number(),
    // Technical indicators
    sma20: v.optional(v.number()),
    sma50: v.optional(v.number()),
    sma200: v.optional(v.number()),
    ema12: v.optional(v.number()),
    ema26: v.optional(v.number()),
    macd: v.optional(v.number()),
    macdSignal: v.optional(v.number()),
    macdHistogram: v.optional(v.number()),
    rsi14: v.optional(v.number()),
    bollingerUpper: v.optional(v.number()),
    bollingerMiddle: v.optional(v.number()),
    bollingerLower: v.optional(v.number()),
    // Value metrics
    valueRatio: v.optional(v.number()), // Price to intrinsic value ratio
    yieldAdjustedValue: v.optional(v.number()), // Value adjusted for yield opportunities
  }).index("by_symbol_timeframe", ["symbol", "timeframe"]),

  // Liquidity pool and yield farming opportunities
  yieldOpportunities: defineTable({
    id: v.string(), // Unique identifier
    platform: v.string(), // "PulseX", "HEX", etc.
    type: v.string(), // "LP", "Staking", "Farming", etc.
    assetSymbol: v.string(), // Primary asset symbol
    pairedAsset: v.optional(v.string()), // For LP pairs
    apy: v.number(), // Annual percentage yield
    apr: v.optional(v.number()), // Annual percentage rate
    tvl: v.number(), // Total value locked
    risk: v.number(), // 1-10 risk score
    buffettScore: v.number(), // 0-100 score based on our Buffett criteria
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()), // For time-limited opportunities
    compounding: v.boolean(), // Whether yields auto-compound
    minInvestment: v.optional(v.number()),
    harvestLockup: v.optional(v.number()), // Lockup period in days
    isActive: v.boolean(),
  }).index("by_platform", ["platform"]).index("by_asset", ["assetSymbol"]),

  // Wallet tracking and portfolio management
  wallets: defineTable({
    address: v.string(),
    name: v.optional(v.string()),
    isTracked: v.boolean(),
    category: v.optional(v.string()), // "whale", "institution", "personal", etc.
    lastUpdated: v.string(),
    totalValue: v.optional(v.number()),
    notes: v.optional(v.string()),
  }).index("by_address", ["address"]),

  // Wallet holdings
  walletHoldings: defineTable({
    walletAddress: v.string(),
    assetSymbol: v.string(),
    assetAddress: v.string(),
    balance: v.number(),
    valueUSD: v.optional(v.number()),
    lastUpdated: v.string(),
    acquisitionData: v.optional(
      v.array(
        v.object({
          date: v.string(),
          amount: v.number(),
          priceUSD: v.number(),
          txHash: v.string(),
        })
      )
    ),
  }).index("by_wallet_asset", ["walletAddress", "assetSymbol"]),

  // Smart money movements (tracking significant transactions)
  smartMoneyMovements: defineTable({
    timestamp: v.string(),
    txHash: v.string(),
    fromAddress: v.string(),
    toAddress: v.string(),
    assetSymbol: v.string(),
    assetAddress: v.string(),
    amount: v.number(),
    valueUSD: v.optional(v.number()),
    txType: v.string(), // "swap", "add_liquidity", "remove_liquidity", "transfer", etc.
    significance: v.number(), // 1-10 score of how significant this movement is
    notes: v.optional(v.string()),
    isWhale: v.boolean(), // Whether this is from a tracked whale address
    marketImpact: v.optional(v.number()), // Estimated market impact percentage
  }).index("by_asset", ["assetSymbol"]),

  // Automated trading strategies
  tradingStrategies: defineTable({
    name: v.string(),
    description: v.string(),
    creator: v.string(),
    createdAt: v.string(),
    lastModified: v.string(),
    isActive: v.boolean(),
    targetAssets: v.array(v.string()),
    timeframes: v.array(v.string()),
    entryConditions: v.array(
      v.object({
        indicator: v.string(),
        condition: v.string(), // "above", "below", "crosses_above", "crosses_below", etc.
        value: v.union(v.string(), v.number()), // Can be a number or another indicator
        weight: v.number(), // How important this condition is (0-1)
      })
    ),
    exitConditions: v.array(
      v.object({
        indicator: v.string(),
        condition: v.string(),
        value: v.union(v.string(), v.number()),
        weight: v.number(),
      })
    ),
    buffettPrinciples: v.array(
      v.object({
        principle: v.string(), // "value", "income", "appreciation", "understanding"
        implementation: v.string(),
        weight: v.number(),
      })
    ),
    riskManagement: v.object({
      maxPositionSize: v.number(), // Percentage of portfolio
      stopLoss: v.optional(v.number()), // Percentage
      takeProfit: v.optional(v.number()), // Percentage
      trailingStop: v.optional(v.number()), // Percentage
      maxDrawdown: v.number(), // Maximum acceptable drawdown
    }),
    performanceMetrics: v.optional(
      v.object({
        winRate: v.number(),
        profitFactor: v.number(),
        sharpeRatio: v.number(),
        maxDrawdown: v.number(),
        averageProfit: v.number(),
        averageLoss: v.number(),
        totalTrades: v.number(),
        profitableTrades: v.number(),
      })
    ),
  }),

  // Strategy backtesting results
  backtestResults: defineTable({
    strategyId: v.id("tradingStrategies"),
    runAt: v.string(),
    timeframe: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    initialCapital: v.number(),
    finalCapital: v.number(),
    totalReturn: v.number(), // Percentage
    annualizedReturn: v.number(), // Percentage
    trades: v.array(
      v.object({
        timestamp: v.string(),
        action: v.string(), // "buy", "sell"
        symbol: v.string(),
        price: v.number(),
        quantity: v.number(),
        value: v.number(),
        fees: v.number(),
        pnl: v.optional(v.number()), // For sell trades
        pnlPercentage: v.optional(v.number()), // For sell trades
        exitReason: v.optional(v.string()),
      })
    ),
    metrics: v.object({
      winRate: v.number(),
      profitFactor: v.number(),
      sharpeRatio: v.number(),
      maxDrawdown: v.number(),
      averageProfit: v.number(),
      averageLoss: v.number(),
      totalTrades: v.number(),
      profitableTrades: v.number(),
    }),
    chartData: v.optional(v.string()), // JSON string of chart data for visualization
  }),

  // On-chain events monitoring
  onChainEvents: defineTable({
    timestamp: v.string(),
    blockNumber: v.number(),
    txHash: v.string(),
    eventType: v.string(), // "Swap", "Mint", "Burn", "Transfer", etc.
    contractAddress: v.string(),
    assetSymbol: v.optional(v.string()),
    parameters: v.string(), // JSON string of event parameters
    decoded: v.boolean(), // Whether we've decoded and processed this event
    significance: v.optional(v.number()), // 1-10 score of how significant this event is
    relatedWallets: v.optional(v.array(v.string())),
  }).index("by_event_type", ["eventType"]),

  // Market sentiment analysis
  marketSentiment: defineTable({
    timestamp: v.string(),
    timeframe: v.string(), // "hourly", "daily", "weekly"
    overallSentiment: v.number(), // -100 to 100 score
    fearGreedIndex: v.optional(v.number()), // 0-100
    socialVolume: v.optional(v.number()),
    newsVolume: v.optional(v.number()),
    topMentions: v.optional(v.array(
      v.object({
        symbol: v.string(),
        count: v.number(),
        sentiment: v.number(), // -100 to 100
      })
    )),
    redditSentiment: v.optional(v.number()),
    twitterSentiment: v.optional(v.number()),
    discordSentiment: v.optional(v.number()),
    telegramSentiment: v.optional(v.number()),
    buffettContrarian: v.optional(v.number()), // How contrary to Buffett principles the market sentiment is
  }),

  // AI predictions and analysis
  aiPredictions: defineTable({
    timestamp: v.string(),
    symbol: v.string(),
    timeframe: v.string(), // "1h", "4h", "1d", "1w", "1m"
    predictionType: v.string(), // "price", "trend", "volatility", "yield", etc.
    predictedValue: v.number(),
    confidence: v.number(), // 0-1
    methodology: v.string(), // "regression", "classification", "time-series", etc.
    features: v.array(v.string()), // Features used in the prediction
    actualValue: v.optional(v.number()), // Actual value once known
    accuracy: v.optional(v.number()), // Accuracy of prediction once known
    reasoning: v.optional(v.string()), // Explanation of prediction
    buffettAlignment: v.number(), // 0-100 score of how aligned with Buffett principles
  }).index("by_symbol_timeframe", ["symbol", "timeframe"]),

  // User portfolio and trade execution
  userPortfolios: defineTable({
    userId: v.string(),
    name: v.string(),
    createdAt: v.string(),
    lastUpdated: v.string(),
    totalValue: v.number(),
    cashBalance: v.number(),
    assets: v.array(
      v.object({
        symbol: v.string(),
        quantity: v.number(),
        averageBuyPrice: v.number(),
        currentValue: v.number(),
        allocation: v.number(), // Percentage of portfolio
        unrealizedPnl: v.number(),
        unrealizedPnlPercentage: v.number(),
      })
    ),
    performanceMetrics: v.object({
      totalReturn: v.number(),
      dailyReturn: v.optional(v.number()),
      weeklyReturn: v.optional(v.number()),
      monthlyReturn: v.optional(v.number()),
      yearlyReturn: v.optional(v.number()),
      buffettScore: v.number(), // How well the portfolio aligns with Buffett principles
    }),
    riskProfile: v.string(), // "conservative", "moderate", "aggressive"
    autoTrade: v.boolean(), // Whether to automatically execute trades
    strategies: v.optional(v.array(v.id("tradingStrategies"))),
  }),

  // User trade history
  userTrades: defineTable({
    userId: v.string(),
    portfolioId: v.id("userPortfolios"),
    timestamp: v.string(),
    symbol: v.string(),
    action: v.string(), // "buy", "sell"
    quantity: v.number(),
    price: v.number(),
    value: v.number(),
    fees: v.number(),
    executionType: v.string(), // "manual", "automatic", "api"
    strategyId: v.optional(v.id("tradingStrategies")),
    signalId: v.optional(v.id("tradingSignals")),
    notes: v.optional(v.string()),
    pnl: v.optional(v.number()), // For sell trades
    pnlPercentage: v.optional(v.number()), // For sell trades
  }).index("by_user", ["userId"]),

  // Notifications and alerts
  notifications: defineTable({
    userId: v.string(),
    timestamp: v.string(),
    type: v.string(), // "price_alert", "trade_executed", "strategy_alert", "whale_movement", etc.
    title: v.string(),
    message: v.string(),
    priority: v.string(), // "low", "medium", "high", "critical"
    read: v.boolean(),
    actionable: v.boolean(),
    actionLink: v.optional(v.string()),
    relatedAsset: v.optional(v.string()),
    relatedStrategy: v.optional(v.id("tradingStrategies")),
  }).index("by_user", ["userId"]),

  // System configuration and settings
  systemConfig: defineTable({
    key: v.string(),
    value: v.string(), // JSON string for complex values
    description: v.string(),
    lastUpdated: v.string(),
    updatedBy: v.string(),
  }).index("by_key", ["key"]),

  // Trade performance analysis (enhanced historical tracking)
  tradePerformance: defineTable({
    strategyId: v.optional(v.id("tradingStrategies")),
    symbol: v.string(),
    entryTimestamp: v.string(),
    entryPrice: v.number(),
    entryReason: v.string(),
    exitTimestamp: v.optional(v.string()),
    exitPrice: v.optional(v.number()),
    exitReason: v.optional(v.string()),
    holdingPeriod: v.optional(v.number()), // In days
    pnl: v.optional(v.number()),
    pnlPercentage: v.optional(v.number()),
    initialStopLoss: v.optional(v.number()),
    initialTakeProfit: v.optional(v.number()),
    maxDrawdown: v.optional(v.number()), // Maximum drawdown during the trade
    maxProfit: v.optional(v.number()), // Maximum profit during the trade
    marketConditions: v.optional(v.string()), // "bull", "bear", "sideways", etc.
    volumeAtEntry: v.optional(v.number()),
    volumeAtExit: v.optional(v.number()),
    tags: v.optional(v.array(v.string())), // For categorizing trades
    notes: v.optional(v.string()),
    lessonLearned: v.optional(v.string()), // Post-trade analysis
    successFactors: v.optional(v.array(v.string())), // What worked well
    failureFactors: v.optional(v.array(v.string())), // What didn't work well
    buffettPrinciplesFollowed: v.optional(v.array(v.string())),
    buffettPrinciplesViolated: v.optional(v.array(v.string())),
  }).index("by_symbol", ["symbol"]).index("by_strategy", ["strategyId"]),
  
  // Trade pattern recognition
  tradePatterns: defineTable({
    name: v.string(),
    description: v.string(),
    patternType: v.string(), // "success", "failure", "neutral"
    discoveredAt: v.string(),
    frequency: v.number(), // How often this pattern occurs
    avgPnlPercentage: v.number(), // Average PnL when this pattern occurs
    winRate: v.number(), // Win rate when this pattern occurs
    conditions: v.array(
      v.object({
        factor: v.string(), // What factor to look at
        condition: v.string(), // Condition to check
        value: v.union(v.string(), v.number()),
      })
    ),
    relatedTrades: v.array(v.id("tradePerformance")),
    actionableInsight: v.string(), // What to do when this pattern is detected
    isActive: v.boolean(), // Whether to actively look for this pattern
  }),
});
