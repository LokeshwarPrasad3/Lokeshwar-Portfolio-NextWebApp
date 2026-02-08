import { useQuery } from "@tanstack/react-query";
import { AnalyticsService } from "@/services/analytics/analytics.service";
import { AnalyticsOverview } from "@/types/analytics/analytics.types";

export const useAnalytics = () => {
  return useQuery<AnalyticsOverview, Error>({
    queryKey: ["analytics", "overview"],
    queryFn: AnalyticsService.getOverview,
    staleTime: 5 * 60 * 1000, // 5 minutes fresh
    gcTime: 10 * 60 * 1000, // 10 minutes cache
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
