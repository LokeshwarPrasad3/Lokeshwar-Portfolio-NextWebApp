"use client";

import { Eye, Clock, Zap } from "lucide-react";
import { useAnalytics } from "@/hooks/analytics/useAnalytics";
import { StatCard } from "@/components/home/stats/StatCard";
import { StatCardSkeleton } from "./AnalyticsSkeleton";

export const AnalyticsStatCards = () => {
  const { data: analytics, isLoading } = useAnalytics();

  if (isLoading) {
    return (
      <>
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </>
    );
  }

  // Format session duration (seconds -> mm:ss)
  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}m ${s}s`;
  };

  return (
    <>
      <StatCard
        label="Total Visitors"
        value={analytics?.totalVisitors?.toLocaleString() || "0"}
        icon={Eye}
        subtext="All time unique visitors"
        gradient="from-blue-500/20 to-cyan-500/20"
        delay={0.1}
      />

      {/* Keeping Avg Page Load as hardcoded since it's not in our analytics types yet */}
      <StatCard
        label="Avg Page Load"
        value="<1s"
        icon={Zap}
        subtext="Consistently fast"
        gradient="from-purple-500/20 to-pink-500/20"
        delay={0.2}
      />

      <StatCard
        label="Avg Session"
        value={formatDuration(analytics?.avgSessionDuration || 0)}
        icon={Clock}
        subtext="High engagement"
        gradient="from-emerald-500/20 to-teal-500/20"
        delay={0.3}
      />
    </>
  );
};
