import React, { ComponentProps, forwardRef } from "react";
import { Input } from "./Input";
import { Text } from "../text/Text";
import { Styles } from "@/types/styles";

type Props = {
  children: React.ReactNode;
  styles?: Styles;
} & ComponentProps<"input">;

// eslint-disable-next-line react/display-name
export const RadioInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children,styles,...inputProps } = props;
  return (
    <label style={{...styles?.radioCommonContainer,...styles?.radioContainer}}>
      <Text >{children}</Text>
      <Input
        {...inputProps}
        type={"radio"}
        style={{ display: "none" }}
        ref={ref}
      />
      {/* <Input {...inputProps} type={"radio"} ref={ref} /> */}
    </label>
  );
});
