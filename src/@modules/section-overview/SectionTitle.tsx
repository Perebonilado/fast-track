import React, { FC } from "react";

interface ISectionTitle {
  title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return (
    <h1 className="sm:text-8xl text-7xl md:text-9xl font-black leading-none mb-8 transform -skew-y-1">
      {title.split(" ").map((word, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? "text-slate-900" : "text-indigo-600"}
        >
          {word}
        </div>
      ))}
    </h1>
  );
};

export default SectionTitle;
