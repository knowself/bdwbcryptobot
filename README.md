# BDWB Crypto Bot

## Our Purpose

The BDWB Crypto Bot is designed to implement a Warren Buffett-inspired investment philosophy for the crypto world. We focus on building automated trading tools using TradingView and Pine Script that prioritize passive income through DeFi and long-term appreciation of fundamentally strong assets.

### Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Convex for database and real-time data synchronization
- **Authentication**: Convex Auth
- **Deployment**: Vercel

## Tech Stack Versions

- **@heroicons/react**: ^2.0.18
- **@types/nodemailer**: ^6.4.17
- **@vercel/analytics**: ^1.1.1
- **ai**: ^4.0.20
- **Convex**: ^1.20.0
- **Next.js**: ^15.2.0

## Our Philosophy

### Value Over Hype
We target cryptocurrencies and DeFi projects with real utility rather than meme coins or speculative assets. Our tools help identify assets trading below their intrinsic value, providing a margin of safety for entry.

### Income Is King
We prioritize passive income generation through DeFi mechanisms like staking, yield farming, and liquidity provision. Our strategy mirrors Buffett's love for businesses that produce consistent cash flow.

### Appreciation as a Bonus
While passive income is our primary focus, we also hold assets with long-term growth potential. Our approach combines the best of Buffett's buy-and-hold strategy with the unique opportunities in the crypto space.

### Understand What You Own
We only invest in projects we can thoroughly research and understand - evaluating blockchain utility, team credibility, and adoption trends before committing capital.

## Core Strategy

Our Pine Script tools implement a three-pronged approach:

1. **Value Identification**: Calculate fair value metrics and identify assets trading below their moving averages
2. **Income Focus**: Target coins with high and consistent DeFi yield opportunities
3. **Long-Term Appreciation**: Prioritize cryptocurrencies with strong fundamentals and growing adoption
4. **Risk Management**: Enter when assets are significantly discounted and implement appropriate stop-losses

## Emotion-Less Trading: Our Data-Driven Approach

One of the most significant advantages of our system is the removal of emotional decision-making from the trading process. We implement a strictly data-driven approach to both entry and exit decisions, ensuring consistency and discipline.

### Entry Strategy: Value-Based Triggers

Our entry strategy is built on quantifiable value metrics rather than market sentiment or FOMO:

1. **Value Ratio Threshold**: We only enter positions when an asset's price-to-intrinsic-value ratio falls below predetermined thresholds (typically 0.7-0.85), providing a margin of safety.

2. **Yield-Adjusted Value**: Entry decisions factor in the current yield opportunities, with higher potential passive income lowering our entry threshold.

3. **Technical Confirmation**: Entry signals require confirmation from multiple technical indicators to avoid value traps:
   - Price below SMA200 but SMA20 crossing above SMA50 (early trend change)
   - RSI recovering from oversold conditions (30-45 range)
   - MACD showing early signs of bullish momentum

4. **Smart Money Validation**: We track wallet movements of identified "smart money" players, using their accumulation as a secondary confirmation.

5. **Contrarian Sentiment Check**: We specifically look for assets with negative market sentiment despite strong fundamentals, applying Buffett's "be fearful when others are greedy, and greedy when others are fearful" principle. Our system is designed to be most aggressive when there is "blood in the streets" - during market panics and extreme fear, when quality assets are available at deep discounts.

### Market Panic Protocol: Blood in the Streets Strategy

We've implemented a specific protocol for extreme market downturns - the "Blood in the Streets" strategy that activates during market-wide panic:

1. **Panic Detection Metrics**: Our system automatically detects market-wide fear using:
   - Fear & Greed Index below 20
   - Market-wide drawdowns exceeding 20% in 7 days
   - Abnormal spike in volatility (VIX equivalent for crypto)
   - Mass liquidation events across exchanges
   - Unusual social media sentiment negativity

2. **Opportunity Scoring**: During panic events, we rapidly score assets based on:
   - Fundamental strength vs. price drop disconnect
   - Team commitment and development activity
   - Treasury/runway sustainability
   - Historical recovery patterns after similar drops

3. **Tiered Deployment Strategy**: Capital deployment follows a systematic schedule:
   - Tier 1: 25% of reserved capital deployed at 30% market drop
   - Tier 2: 25% at 40% market drop
   - Tier 3: 25% at 50% market drop
   - Tier 4: 25% reserved for extreme scenarios or strategic opportunities

4. **Quality Over Quantity**: Focus narrows to only the highest quality assets:
   - Blue-chip assets with proven history
   - Projects with sustainable yield mechanisms
   - Essential infrastructure with genuine utility
   - Teams with proven track records of delivering through previous bear markets

5. **Extended Holding Parameters**: Modified holding strategy for panic-bought assets:
   - Longer time horizons (minimum 1-2 year outlook)
   - Reduced stop-loss sensitivity
   - Focus on accumulating during weakness rather than quick profits
   - Emphasis on projects with passive income generation even during bear markets

This protocol ensures we act decisively when others are paralyzed by fear, embodying Buffett's principle of being "greedy when others are fearful" in a systematic, emotion-free manner.

### Exit Strategy: Systematic Risk Management

Our exit strategy removes the emotional attachment that often prevents traders from cutting losses or taking profits:

1. **Tiered Take-Profit System**: Rather than trying to time the exact top:
   - 25% of position exits at 1.5x the initial target
   - 50% of position exits at 2x the initial target
   - 25% remains for long-term appreciation or yield farming

2. **Adaptive Stop-Loss Mechanism**: Our stop-losses adjust based on:
   - Volatility (using ATR - Average True Range)
   - Asset fundamentals (stronger fundamentals = wider stops)
   - Yield income (higher yield = wider stops)

3. **Fundamental Exit Triggers**: We exit regardless of price action if:
   - Yield opportunities significantly deteriorate
   - Project fundamentals change (team changes, security issues, etc.)
   - Competing projects demonstrate superior technology or adoption

4. **Pattern-Based Exit Signals**: Our system identifies patterns from historical trade data that preceded significant downturns, triggering preventative exits.

5. **Maximum Drawdown Rules**: Strict adherence to predefined maximum drawdown thresholds for each risk category:
   - Conservative: 15% max drawdown
   - Moderate: 25% max drawdown
   - Aggressive: 40% max drawdown

### Continuous Improvement Through Feedback Loops

Our system doesn't just execute trades; it learns from them:

1. **Post-Trade Analysis**: Every trade is automatically analyzed for:
   - Accuracy of entry/exit timing
   - Validity of the initial thesis
   - Effectiveness of stop-loss and take-profit levels

2. **Pattern Recognition**: The system identifies recurring patterns in successful and unsuccessful trades, continuously refining its decision models.

3. **Buffett Principle Alignment**: Each trade is scored on how well it adhered to our core Buffett principles, with this feedback improving future trade selection.

4. **Adaptive Parameters**: Based on historical performance, the system gradually adjusts its parameters for:
   - Value ratio thresholds
   - Technical indicator weights
   - Stop-loss and take-profit levels
   - Position sizing

### The Human Element: Where We Still Add Value

While our system automates the emotional aspects of trading, human oversight remains crucial for:

1. **Fundamental Analysis**: Evaluating new projects and technologies
2. **Regulatory Adaptation**: Adjusting to changing regulatory environments
3. **Black Swan Events**: Intervening during unprecedented market conditions
4. **System Improvement**: Enhancing the trading algorithms based on emerging patterns

This balanced approach combines the consistency and discipline of algorithmic trading with the adaptability and insight of human oversight.

## Data Schema Architecture

Our Convex database schema is designed to support our Buffett-inspired trading approach in the PulseChain ecosystem. The schema enables comprehensive tracking, analysis, and action on crypto trades with a focus on value investing principles.

### Schema Design Philosophy

Our schema is built around four key principles:

1. **Value-Based Asset Tracking**: We track fundamental metrics that help identify undervalued assets
2. **Income-First Approach**: We prioritize yield opportunities with sustainable returns
3. **Long-Term Growth Potential**: We monitor adoption metrics and on-chain activity
4. **Transparent Performance Analysis**: We maintain detailed records of all trades for honest assessment

### Schema Structure

#### Core Asset Tracking
- **pulseChainAssets**: Comprehensive registry of tokens with fundamental scoring
- **tradingPairs**: Liquidity and volume data across PulseChain DEXes
- **priceHistory**: OHLCV data with technical indicators and value metrics
- **yieldOpportunities**: Staking, LP, and farming opportunities with risk assessment

#### Wallet & Transaction Monitoring
- **wallets** & **walletHoldings**: Track whale addresses and institutional players
- **smartMoneyMovements**: Monitor significant transactions with market impact assessment
- **onChainEvents**: Decode and analyze important on-chain activities

#### Trading Strategy Implementation
- **tradingStrategies**: Define strategies with explicit Buffett principles
- **backtestResults**: Test strategies against historical data
- **aiPredictions**: AI-powered forecasts with Buffett alignment scoring
- **marketSentiment**: Contrarian indicators for going against the crowd

#### Trade Performance Analysis
- **tradePerformance**: Detailed tracking of individual trades with comprehensive metrics
- **tradePatterns**: Identification of recurring patterns in successful and unsuccessful trades
- **userTrades**: Complete history of all executed trades
- **userPortfolios**: Portfolio performance with Buffett-aligned metrics

### Innovations in Our Schema

1. **Buffett Scoring System**: Every asset, yield opportunity, and trading strategy is scored based on Buffett principles
2. **Smart Money Tracking**: We follow what institutional players are doing without blindly copying them
3. **Pattern Recognition**: We systematically identify what works and what doesn't in our trading approach
4. **Transparent Performance Metrics**: We maintain detailed records of successes and failures for honest assessment
5. **Lesson-Driven Improvement**: Each trade contributes to our knowledge base with explicit lessons learned

### How We Track Trading Success and Failure

Our `tradePerformance` table is specifically designed to maintain a comprehensive record of all trades with metrics that help us:

1. **Identify Winners Early**: By tracking patterns that lead to successful trades
2. **Cut Losers Quickly**: By setting clear exit criteria and monitoring drawdowns
3. **Learn From Mistakes**: By documenting lessons learned from each trade
4. **Improve Over Time**: By analyzing which Buffett principles were followed or violated

Each trade record includes:
- Entry and exit details with timestamps and prices
- Profit/loss metrics in absolute and percentage terms
- Maximum drawdown and maximum profit during the trade
- Market conditions at entry and exit
- Success and failure factors
- Lessons learned
- Buffett principles followed or violated

This data feeds into our `tradePatterns` system, which automatically identifies recurring patterns in our trading history and generates actionable insights for future trades.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

This project is built with:
- [Next.js](https://nextjs.org) - React framework for web applications
- [TradingView](https://www.tradingview.com/) - For charting and Pine Script implementation
- [Pine Script](https://www.tradingview.com/pine-script-docs/en/v5/Introduction.html) - TradingView's programming language for creating custom indicators and strategies
- [Convex](https://www.convex.dev/) - Backend database and real-time data synchronization

## Learn More

To learn more about the technologies we use:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [TradingView Pine Script Documentation](https://www.tradingview.com/pine-script-docs/en/v5/index.html) - learn about Pine Script
- [DeFi Llama](https://defillama.com/) - Research DeFi protocols and yields
- [Convex Documentation](https://docs.convex.dev/) - Learn about Convex database

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
