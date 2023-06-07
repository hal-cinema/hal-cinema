import { Button } from "@/components/elements/button/Button";
import { Styles } from "@/types/styles";
import React from "react";
import { Text } from "../../elements/text/Text";
import Image from "next/image";
import Link from "next/link";
import { Flex } from "@/components/elements/box/Flex";

type Props = {
  isActive: (path: string) => boolean;
};

export const Header = (props: Props) => {
  const { isActive } = props;
  const BUTTON = [
    {
      name: "ホーム",
      sub: "Home",
      path: "/",
    },
    {
      name: "上映時間",
      sub: "Schedule",
      path: "/schedule",
    },
    {
      name: "作品案内",
      sub: "Movies",
      path: "/movie",
    },
    {
      name: "施設案内",
      sub: "Theater",
      path: "/theater",
    },
    {
      name: "料金案内",
      sub: "Price",
      path: "/price",
    },
    {
      name: "よくある質問",
      sub: "Q&A",
      path: "/qa",
    },
  ];
  return (
    <Flex style={styles.container}>
      <Link href="/" style={styles.logo}>
        HAL<Text>CINEMA</Text>
      </Link>
      <nav style={styles.nav}>
        {BUTTON.map((button, index) => (
          <Link href={button.path} key={index}>
            <Flex
              style={styles.button}
              direction="column"
              justify="center"
              align="center"
            >
              {button.name}
            </Flex>
          </Link>
        ))}
      </nav>
    </Flex>
  );
};

const styles: Styles = {
  container: {
    position: "fixed",
    top: 0,
    width: "100vw",
    backgroundColor: "#FF9933",
    padding: "5px 20px 0 20px",
    zIndex: 50
  },
  logo: {
    fontSize: "30px",
    color: "#fff",
  },
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 20px 0 20px",
    position: "relative",
  },
};
