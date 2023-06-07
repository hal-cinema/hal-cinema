import { Styles } from "@/types/styles";
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};
export const BoxLabel = (props: Props) => {
  const { children, label } = props;
  return (
    <div style={styles.container}>
      <p style={styles.p}>{label}</p>
      {children}
    </div>
  );
};

const styles: Styles = {
  container: {
  },
  p: {
    display: "inline-block",
    background: "#222550",
    color: "#fff",
    padding: "10px 30px",
    borderRadius: "5px 5px 0 0",
  },
};
