import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface IChartProps {
  data: number[];
  title?: string;
  startLabel?: string;
  endLabel?: string;
  className?: string;
  accentColor?: string;
  baseColor?: string;
}

const InsightChart: React.FC<IChartProps> = ({
  data,
  title = "TREND VISUALIZATION",
  startLabel = "WEEK 1",
  endLabel = "CURRENT",
  className = "",
  accentColor = "#4f46e5", 
  baseColor = "#0f172a", 
}) => {
  const chartData = data.map((value, index) => ({
    name: `W${index + 1}`,
    value: value,
    index: index,
  }));

  return (
    <div
      className={`bg-amber-300 border-8 border-slate-900 p-10 shadow-[20px_20px_0_0_rgba(15,23,42,1)] ${className}`}
    >
      <div className="text-2xl font-black mb-8 tracking-wider text-slate-900">
        {title}
      </div>

      <div className="h-64 mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 40, left: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: baseColor,
                fontSize: 12,
                fontWeight: 900,
              }}
            />
            <YAxis hide />
            <Bar
              dataKey="value"
              radius={[0, 0, 0, 0]}
              label={{
                position: "top",
                fill: baseColor,
                fontSize: 14,
                fontWeight: 900,
                offset: 8,
              }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={accentColor}
                  stroke={baseColor}
                  strokeWidth={4}
                  style={{
                    transition: "fill 0.2s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-sm font-black text-slate-900">
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
    </div>
  );
};

export default InsightChart;
