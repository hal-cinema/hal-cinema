import { Flex } from "@/components/elements/box/Flex";
import { BoxLabel } from "@/components/elements/label/BoxLabel";
import { SubNews } from "@/types/subnews";
import React from "react";

type Props = {
  newsList: SubNews[];
  label: string;
};
export const SubNewsList = (props: Props) => {
  const { newsList, label } = props;
  return (
    <BoxLabel label={label}>
      <Flex direction="column">
        {newsList.map((news, index) => (
          <Flex direction="column" key={index}>
            <p>{news.created_at}</p>
            <p>{news.title}</p>
          </Flex>
        ))}
      </Flex>
    </BoxLabel>
  );
};
