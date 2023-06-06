import { Flex } from "@/components/elements/box/Flex";
import { BoxLabel } from "@/components/elements/label/BoxLabel";
import { Advertisement } from "@/types/advertisement";
import Image from "next/image";
import { type } from "os";
import React from "react";

type Props = {
  advertisements: Advertisement[];
};
export const AdvertisementList = (props: Props) => {
  const { advertisements } = props;
  return (
      <Flex direction="column">
        {advertisements.map((advertisement, index) => (
          <Image
            src={advertisement.src}
            alt={advertisement.alt}
            width={100}
            height={100}
            key={index}
          />
        ))}
      </Flex>
  );
};
