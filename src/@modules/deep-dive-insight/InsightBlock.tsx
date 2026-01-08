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
  const outerRotate = rotate === "right" ? "rotate-1" : "-rotate-1";
  const innerRotate = rotate === "right" ? "-rotate-1" : "rotate-1";

  return (
    <div
      className={`${bgColor} border-8 border-slate-900 p-8 shadow-[12px_12px_0_0_rgba(15,23,42,1)] transform ${outerRotate}`}
    >
      <div className={`transform ${innerRotate}`}>
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <Icon className="fill-slate-900 shrink-0" size={40} />
            <h3 className="text-3xl font-black text-slate-900 uppercase">
              {title}
            </h3>
          </div>

          <div className="bg-slate-900 text-slate-50 px-6 py-3 border-4 border-slate-900 shrink-0">
            <div className="text-4xl font-black">{value}%</div>
          </div>
        </div>

        <p className="text-slate-900 font-bold text-xl mb-6 leading-relaxed">
          {description}
        </p>

        <div className="h-8 bg-slate-50 border-4 border-slate-900">
          <div className="h-full bg-slate-900" style={{ width: `${value}%` }} />
        </div>
      </div>
    </div>
  );
};

export default InsightBlock;
