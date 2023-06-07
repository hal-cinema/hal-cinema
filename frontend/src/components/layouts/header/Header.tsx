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
  ];
  return (
    <Flex style={styles.container} direction="column">
      <Flex style={styles.top_nav}>
        <Link href="/" style={styles.logo}>
          HAL<Text>CINEMA</Text>
        </Link>
        <Flex style={styles.top_nav}>
          <Link href="/FAQ">よくある質問</Link>
          <Link href="/login">言語選択</Link>
        </Flex>
      </Flex>
      <Flex style={styles.bottom_nav}>
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
      </Flex>
    </Flex>
  );
};

const styles: Styles = {
  container: {
    position: "fixed",
    top: 0,
    width: "100vw",
    backgroundColor: "#FF9933",
  },
  logo: {
    fontSize: "30px",
    color: "#fff",
  },
  bottom_nav: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "5px 20px 0 20px",
  },
  button: {
    backgroundColor: "transparent",
    color: "#000",
    padding: "10px 20px 0 20px",
    position: "relative",
  },
};
