import { RadioInput } from "@/components/elements/input/RadioInput";
import React from "react";
import Image from "next/image";
import { Styles } from "@/types/styles";
import { Flex } from "@/components/elements/box/Flex";

type Props = {
  handleSetMinimum: (isMinimum: boolean) => void;
  isMinimum: boolean;
};

export const MovieSizeTab = (props: Props) => {
  const { handleSetMinimum,isMinimum } = props;
  return (
    <Flex style={styles.container} justify="flex-end">
      <Flex style={{width:"114px"}} justify="space-between">
        <RadioInput
          defaultChecked={true}
          name="movie"
          onChange={() => {
            handleSetMinimum(true);
          }}
        >
          <Image
            src={isMinimum?"/movie/activeMinimum.svg":"/movie/minimum.svg"}
            alt="minimum"
            width={42}
            height={42}
          />
        </RadioInput>
        <RadioInput
          name="movie"
          onChange={() => {
            handleSetMinimum(false);
          }}
        >
          <Image src={isMinimum?"/movie/detail.svg":"/movie/activeDetail.svg"} alt="minimum" width={42} height={42} />
        </RadioInput>
      </Flex>
    </Flex>
  );
};

const styles: Styles = {
  container: {
    padding: "30px",
    width: "100%",
  },
};
