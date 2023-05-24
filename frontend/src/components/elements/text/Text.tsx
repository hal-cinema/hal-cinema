import React, { CSSProperties, ReactNode } from "react";

type Props={
    children:ReactNode
    style?:CSSProperties
}
export const Text = (props:Props) => {
    const {children,style} = props
  return <span style={style}>{children}</span>;
};
