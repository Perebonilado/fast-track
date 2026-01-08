import React, { FC } from "react";
import Spinner from "./Spinner";

interface Props {
  loaderMessage?: string;
  spinnerSize?: "sm" | "md";
}

export const AppLoader: FC<Props> = ({ loaderMessage, spinnerSize = "md" }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen fixed z-[8000] top-0 left-0 w-screen bg-black/60 backdrop-blur-sm">
      <div className="flex items-end gap-2 h-16">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-4 bg-slate-600 border-4 border-slate-900 animate-bounce"
          style={{
            height: '60%',
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
    </div>
      {loaderMessage && (
        <p className="w-full max-w-[500px] px-3 mx-auto text-center max-md:text-sm font-semibold text-white drop-shadow-lg">
          {loaderMessage}
        </p>
      )}
    </div>
  );
}