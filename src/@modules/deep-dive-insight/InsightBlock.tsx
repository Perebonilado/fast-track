import React, { FC } from "react";
import { Triangle, Circle, Square, Hexagon } from "lucide-react";

export const shapes = [Triangle, Circle, Square, Hexagon];

export type Trend = "up" | "down" | "stable";

interface InsightBlockProps {
  title: string;
  description: string;
  value: number;
  trend: Trend;
  bgColor: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  rotate?: "left" | "right";
}

const InsightBlock: FC<InsightBlockProps> = ({
  title,
  description,
  value,
  bgColor,
  Icon,
  rotate = "right",
}) => {
  const outerRotate = rotate === "right" ? "md:rotate-1" : "md:-rotate-1";
  const innerRotate = rotate === "right" ? "md:-rotate-1" : "md:rotate-1";

  return (
    <div
      className={`${bgColor} border-4 md:border-8 border-slate-900 p-4 sm:p-6 md:p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)] md:shadow-[12px_12px_0_0_rgba(15,23,42,1)] transform ${outerRotate}`}
    >
      <div className={`transform ${innerRotate}`}>
        {/* Header - Stacks on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <Icon className="fill-slate-900 shrink-0" size={32} />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 uppercase leading-tight break-words">
              {title}
            </h3>
          </div>

          {/* Value badge */}
          <div className="bg-slate-900 text-slate-50 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-3 sm:border-4 border-slate-900 shrink-0 self-start">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-nowrap">
              {value}%
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-900 font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Progress bar */}
        <div className="h-6 sm:h-7 md:h-8 bg-slate-50 border-3 sm:border-4 border-slate-900 overflow-hidden">
          <div 
            className="h-full bg-slate-900 transition-all duration-500 ease-out" 
            style={{ width: `${value}%` }} 
          />
        </div>
      </div>
    </div>
  );
};

export default InsightBlock;
