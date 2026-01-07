import React, { FC } from "react";

interface ICurrentIndex {
  value: number;
}

const CurrentIndexCard: FC<ICurrentIndex> = ({ value }) => {
  return (
    <div className="bg-slate-900 text-slate-50 border-8 border-slate-900 p-10 shadow-[16px_16px_0_0_rgba(79,70,229,0.4)]">
      <div className="text-2xl font-black mb-4 tracking-wider">
        CURRENT INDEX
      </div>
      <div className="flex items-baseline gap-4">
        <div className="text-9xl font-black leading-none">{value}</div>
        <div className="text-6xl font-black text-indigo-400">%</div>
      </div>
    </div>
  );
};

export default CurrentIndexCard;
