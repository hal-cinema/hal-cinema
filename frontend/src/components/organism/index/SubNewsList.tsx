import { Flex } from "@/components/elements/box/Flex";
import { BoxLabel } from "@/components/elements/label/BoxLabel";
import { Styles } from "@/types/styles";
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
      <Flex direction="column" style={styles.container}>
        {newsList.map((news, index) => (
          <Flex direction="column" key={index} style={styles.news_box}>
            <p style={styles.news_created_at}>{news.created_at}</p>
            <p style={styles.news_title}>{news.title}</p>
          </Flex>
        ))}
      </Flex>
    </BoxLabel>
  );
};

const styles: Styles = {
  container: {
    width: "650px",
    height: "733px",
    borderTop: "4px solid #222550",
    background: "#fff",
  },
  news_box: {
    padding: "21.5px",
    boxSizing: "unset",
    width: "615px",
    height: "61px",
    borderBottom: "2px dashed #22255045",
    position: "relative",
  },
  news_title: {
    fontSize: "18px",
    fontWeight: "bold",
    width: "614px",
    height: "100%",
    textDecorationLine: "underline"
  },
  news_created_at: {
    fontSize: "18px",
    color: "#B8B8B8",
  },
};
