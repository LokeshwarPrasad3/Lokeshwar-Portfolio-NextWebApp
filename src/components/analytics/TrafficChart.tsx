"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useAnalytics } from "@/hooks/analytics/useAnalytics";
import { ChartSkeleton } from "@/components/analytics/AnalyticsSkeleton";

const TrafficChart = () => {
  const { data: analytics, isLoading, isError } = useAnalytics();

  if (isLoading) return <ChartSkeleton />;

  // Transform backend data to chart series
  // Ensure we have data or fallback to empty array
  const monthlyData = analytics?.monthlyTraffic || [];

  const series = [
    {
      name: "Visitors",
      data: monthlyData.map((d) => d.visitors),
    },
  ];

  const categories = monthlyData.map((d) => d.month);

  const options: ApexOptions = {
    chart: {
      type: "area", // Area chart allows for fill gradient easier
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "inherit",
    },
    colors: ["#818cf8"], // Indigo-400 - distinct but soft
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#818cf8"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: "#334155", // Slate-700
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#94a3b8", // Slate-400
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#94a3b8", // Slate-400
          fontSize: "12px",
          fontFamily: "inherit",
        },
      },
    },
    theme: {
      mode: "dark",
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
      },
      x: {
        show: false,
      },
      marker: {
        show: true,
      },
    },
  };

  return (
    <div className="h-full w-full rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-100">Monthly Website Traffic</h3>
        <p className="text-sm text-slate-400">Last 6 months</p>
      </div>

      <div className="h-[300px] w-full">
        {isError ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            Failed to load traffic data
          </div>
        ) : (
          <Chart options={options} series={series} type="area" width="100%" height="100%" />
        )}
      </div>
    </div>
  );
};

export default TrafficChart;
