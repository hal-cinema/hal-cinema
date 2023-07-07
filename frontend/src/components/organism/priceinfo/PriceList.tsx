import { Flex } from "@/components/elements/box/Flex";
import { Styles } from "@/types/styles";
import React from "react";

const PriceList = () => {
  return (
    <>
      <Flex
        style={styles.container}
        justify="center"
        align="center"
        direction="column"
      >
        <div style={styles.pricebody}>
          <div style={styles.priceContents}>
            <Flex direction="row" style={styles.list}>
              <p style={styles.p1}>一般</p>
              <p style={styles.p2}></p>
              <p style={styles.p3}>1800円</p>
            </Flex>
            <div style={styles.border} />
            <Flex direction="row" style={styles.list}>
              <p style={styles.p1}>大学生</p>
              <p style={styles.p2}>※学生証をご提示ください</p>
              <p style={styles.p3}>1600円</p>
            </Flex>
            <div style={styles.border} />
            <Flex direction="row" style={styles.list}>
              <p style={styles.p1}>高校生</p>
              <p style={styles.p2}>※学生証をご提示ください</p>
              <p style={styles.p3}>1400円</p>
            </Flex>
            <div style={styles.border}></div>
            <Flex direction="row" style={styles.list}>
              <p style={styles.p1}>小人</p>
              <p style={styles.p2}></p>
              <p style={styles.p3}>1000円</p>
            </Flex>
          </div>
        </div>
      </Flex>
    </>
  );
};

const styles: Styles = {
  container: {
    background: "#fff",
    paddingTop: "30px",
    width: "1000px",
  },
  pricebody: {
    background: "#fff",
    width: "100%",
    padding: "0 60px",
  },
  priceContents: {
    background: "#F9F9F9",
    width: "100%",
    padding: "5px 30px",
  },
  list: {
    position: "relative",
    width: "100%",
    background: "#F9F9F9",
    padding: "20px 5px 20px 5px",
  },
  border: {
    width: "100%",
    height: "1px",
    background: "#A9A9A9",
  },
  p1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  p2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
  },
  p3: {
    position: "absolute",
    right: "0px",
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
};

export default PriceList;
