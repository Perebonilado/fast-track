import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-7xl mx-auto relative z-10">{children}</div>;
};

export default Container;
