import React, { FC } from "react";

export type Stat = "critical" | "average" | "strong";

export interface IStatus {
  status: Stat;
}

const StatusBar: FC<IStatus> = ({ status }) => {
  const config = {
    critical: { bg: "bg-rose-400", text: "CRITICAL ALERT" },
    average: { bg: "bg-amber-300", text: "REQUIRES ATTENTION" },
    strong: { bg: "bg-emerald-300", text: "STRONG PERFORMANCE" },
  };

  const { bg, text } = config[status as keyof typeof config];

  return (
    <div
      className={`${bg} border-8 border-slate-900 px-8 py-4 shadow-[8px_8px_0_0_rgba(15,23,42,1)] transform -skew-x-6`}
    >
      <div className="transform skew-x-6 text-slate-900 font-black text-2xl tracking-wider">
        {text}
      </div>
    </div>
  );
};

export default StatusBar;
