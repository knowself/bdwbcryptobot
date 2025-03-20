import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Run TheMarket function every 5 minutes
// Note: Uncomment this once the internal.market.theMarket function is available in the API
// crons.interval(
//   "process-market-data",
//   { minutes: 5 }, // every 5 minutes
//   internal.market.theMarket
// );

// For now, we'll define the cron job but comment it out until we deploy the function
// and it's available in the generated API

export default crons;
