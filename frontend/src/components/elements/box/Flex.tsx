import { Styles } from "@/types/styles";
import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  direction?: "row" | "column";
  style?:CSSProperties
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch";
  align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};
export const Flex = (props: Props) => {
  const { children,style, align, direction, justify, wrap } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: align,
        flexDirection: direction,
        justifyContent: justify,
        flexWrap: wrap,
        ...style
      }}
    >
      {children}
    </div>
  );
};

