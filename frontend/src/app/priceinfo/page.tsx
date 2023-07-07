import { Flex } from "@/components/elements/box/Flex";
import { Header } from "@/components/layouts/header/Header";
import FoodList from "@/components/organism/priceinfo/FoodList";
import PriceList from "@/components/organism/priceinfo/PriceList";
import ContentTitle from "@/components/organism/theater/ContentTitle";
import { Styles } from "@/types/styles";
import React from "react";

const Priceinfo = () => {
  return (
    <>
      <Header />
      <div style={styles.body}>
        <Flex style={styles.conteiner} direction="column">
          <ContentTitle label={"料金案内"} />
          <PriceList />
          <ContentTitle label={"フード案内"} />
          <FoodList />
        </Flex>
      </div>
    </>
  );
};

const styles: Styles = {
  conteiner: {
    width: "1000px",
    background: "#fff",
  },
  body: {
    display: "flex",
    width: "100%",
    height: "auto",
    background: "#F5F5F5",
    verticalAlign: "center",
    justifyContent: "center",
  },
};

export default Priceinfo;
