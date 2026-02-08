export interface MonthlyTrafficItem {
  month: string;
  visitors: number;
}

export interface AnalyticsOverview {
  monthlyTraffic: MonthlyTrafficItem[];
  totalVisitors: number;
  avgSessionDuration: number; // in seconds
}
