import { Flex } from "@/components/elements/box/Flex";
import { BoxLabel } from "@/components/elements/label/BoxLabel";
import { Advertisement } from "@/types/advertisement";
import { Styles } from "@/types/styles";
import Image from "next/image";
import { type } from "os";
import React from "react";

type Props = {
  advertisements: Advertisement[];
};
export const AdvertisementList = (props: Props) => {
  const { advertisements } = props;
  return (
      <Flex direction="column" style={styles.container}>
        {advertisements.map((advertisement, index) => (
          <Image
            src={advertisement.src}
            alt={advertisement.alt}
            width={300}
            height={82}
            key={index}
          />
        ))}
      </Flex>
  );
};
const styles:Styles={
  container:{
    position:"relative",
    top:"50px"
  },
}