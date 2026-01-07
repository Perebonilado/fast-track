import React, { FC } from "react";

interface IScore {
  score: number;
}

const ScoreCard: FC<IScore> = ({ score }) => {
  const getColor = (score: number) => {
    if (score < 60) return "bg-rose-400";
    if (score < 75) return "bg-amber-300";
    return "bg-emerald-300";
  };

  return (
    <div className="relative">
      <div
        className={`w-80 h-80 ${getColor(
          score
        )} border-8 border-slate-900 transform -rotate-3 shadow-[12px_12px_0_0_rgba(15,23,42,1)]`}
      >
        <div className="w-full h-full bg-slate-50 border-8 border-slate-900 flex items-center justify-center transform rotate-6">
          <div className="text-center transform -rotate-6">
            <div className="text-9xl font-black text-slate-900 leading-none mb-2">
              {score}
            </div>
            <div className="text-xs font-black tracking-[0.3em] text-slate-600">
              PERFORMANCE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
