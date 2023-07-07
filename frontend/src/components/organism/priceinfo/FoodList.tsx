import { Flex } from "@/components/elements/box/Flex";
import { Styles } from "@/types/styles";
import Image from "next/image";
import React from "react";

const FoodList = () => {
  return (
    <>
      <Flex style={styles.container} justify="center" align="center">
        <Image
          src={"./priceInfo/foodMenu.svg"}
          alt="ʕ◔ϖ◔ʔ"
          width={875}
          height={1238}
          style={styles.foodContents}
        />
      </Flex>
    </>
  );
};

const styles: Styles = {
  container: {
    width: "100%",
    height: "auto",
    paddingTop: "30px",
  },
  foodContens: {},
};

export default FoodList;
