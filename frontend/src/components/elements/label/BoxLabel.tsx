import { title } from "process";
import React, { CSSProperties } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};
export const BoxLabel = (props: Props) => {
  const { children, label } = props;
  return (
    <div>
      <p style={styles}>{label}</p>
      {children}
    </div>
  );
};

const styles: CSSProperties = {};
