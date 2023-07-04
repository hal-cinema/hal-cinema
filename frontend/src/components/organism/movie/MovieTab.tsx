import { Form } from "@/components/elements/form/Form";
import { RadioInput } from "@/components/elements/input/RadioInput";
import { Styles } from "@/types/styles";
import React from "react";

type Props = {
  isScreening: boolean;
  handleSetScreen: (isScreening: boolean) => void;
};

export const MovieTab = (props: Props) => {
  const { handleSetScreen, isScreening } = props;

  return (
    <div style={movieTabStyle.container}>
      <div style={movieTabStyle.tabs}>
        <RadioInput
          styles={
            isScreening
              ? { ...radioCommonStyles, ...tabTitle }
              : { ...radioCommonStyles, ...activeTabTitle }
          }
          onClick={() => {
            handleSetScreen(false);
          }}
          name="movie"
        >
          上映中作品
        </RadioInput>

        <RadioInput
          styles={
            isScreening
              ? { ...radioCommonStyles, ...activeTabTitle }
              : { ...radioCommonStyles, ...tabTitle }
          }
          onClick={() => {
            handleSetScreen(true);
          }}
          name="movie"
        >
          公開予定作品
        </RadioInput>
      </div>
    </div>
  );
};

const movieTabStyle: Styles = {
  container: {
    padding: "30px 0  0 0",
    display: "flex",
    maxWidth: "1000px",
    justifyContent: "center",
    boxSizing: "unset",
  },
  tabs: {
    display: "flex",
    maxWidth: "1000px",
    justifyContent: "center",
    borderBottom: "solid 5px #2A2D55",
  }
};

const radioCommonStyles: Styles = {
  radioCommonContainer: {
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px",
    fontSize: "25px",
  },
};

const tabTitle: Styles = {
  radioContainer: {
    backgroundColor: "#ddd",
    display: "flex",
    width: "480px",
    height: "110px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    margin: " 0px 10px 10px 10px",
  },
};
const activeTabTitle: Styles = {
  radioContainer: {
    backgroundColor: "white",
    width: "500px",
    borderRadius: "15px 15px 0px 0px",
    background: "#2A2D55",
    color: "white",
  },
};
