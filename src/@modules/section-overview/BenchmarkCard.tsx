import { Triangle } from "lucide-react";
import React, { FC } from "react";

interface IBenchmark {
  diff: number;
  metric: string;
}

const BenchmarkCard: FC<IBenchmark> = ({ diff, metric }) => {
  return (
    <div className="bg-rose-400 border-8 border-slate-900 p-10 shadow-[16px_16px_0_0_rgba(15,23,42,1)] transform rotate-1">
      <div className="transform -rotate-1">
        <div className="flex items-center gap-4 mb-4">
          <Triangle className="fill-slate-900" size={48} />
          <div className="text-2xl font-black text-slate-900 tracking-wider">
            BENCHMARK GAP
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <div className="text-8xl font-black text-slate-900 leading-none">
            {diff}
          </div>
          <div className="text-5xl font-black text-slate-900">%</div>
        </div>
        <div className="text-xl font-black text-slate-900 mt-2 uppercase">
          {metric}
        </div>
      </div>
    </div>
  );
};

export default BenchmarkCard;
