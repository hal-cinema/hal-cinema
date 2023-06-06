import { Button } from "@/components/elements/button/Button";
import { Styles } from "@/types/styles";
import React from "react";
import { Nav } from "../../elements/nav/Nav";
import { Text } from "../../elements/text/Text";
import Image from "next/image";
import Link from "next/link";

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
    <div style={styles.container}>
      <Link href="/" style={styles.logo}>
        HAL<Text>CINEMA</Text>
      </Link>
      <Nav style={styles.nav}>
        {BUTTON.map((button, index) => (
          <Link href={button.path} style={styles.button} key={index}>
            {button.name}
          </Link>
        ))}
      </Nav>
    </div>
  );
};

const styles: Styles = {
  container: {
    position: "fixed",
    top: 0,
    width: "100vw",
    backgroundColor: "#FF9933",
    padding: "5px 20px 0 20px",
    display: "flex",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
  },
};
