import axios from "axios";
import { AnalyticsOverview } from "@/types/analytics/analytics.types";

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: "/api", // Adjust base URL as needed based on your backend setup
  headers: {
    "Content-Type": "application/json",
  },
});

export const AnalyticsService = {
  getOverview: async (): Promise<AnalyticsOverview> => {
    const response = await apiClient.get<AnalyticsOverview>("/analytics");
    return response.data;
  },
};
