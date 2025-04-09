import React, { ReactNode } from "react";
const Container = (parameters: { children?: ReactNode }): React.ReactNode => {
  return <div className="container-root">{parameters.children}</div>;
};
export default Container;
