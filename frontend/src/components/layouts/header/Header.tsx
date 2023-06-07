import { Styles } from "@/types/styles"
import React, { useEffect, useState } from "react"
import { Text } from "../../elements/text/Text"
import Link from "next/link"
import { Flex } from "@/components/elements/box/Flex"

type Props = {
  isActive: (path: string) => boolean
}

export const Header = (props: Props) => {
  const [selectedButton, setSelectedButton] = useState("/")

  const handleActivate = (path: string) => {
    setSelectedButton(path)
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const buttonStyle = isScrolled ? styles.scrolled_button : styles.button
  const selectedButtonStyle = isScrolled ? styles.scrolled_selectedButton : styles.selectedButton
  

  const BUTTON = [
    {
      name: "ホーム",
      sub: "Home",
      path: "/",
    },
    {
      name: "上映スケジュール",
      sub: "Schedule",
      path: "/schedule",
    },
    {
      name: "施設案内",
      sub: "Theater",
      path: "/theater",
    },
    {
      name: "作品案内",
      sub: "Movies",
      path: "/movie",
    },
    {
      name: "料金案内",
      sub: "Price",
      path: "/price",
    },
  ]
  return (
    <Flex style={!isScrolled ? styles.container : styles.scrolled} direction="column">
      <Flex style={styles.top_nav} justify="space-between" align="center">
        <Link href="/" style={styles.logo}>
          HAL<Text>CINEMA</Text>
        </Link>
        <Flex direction="row" style={styles.settings_nav}>
          <Link style={styles.faq} href="/FAQ">？</Link>
          <Link style={styles.lang} href="/login">言語選択</Link>
        </Flex>
      </Flex>
      <Flex style={!isScrolled ? styles.bottom_nav : styles.scrolled_nav}>
        {BUTTON.map((button, index) => (
          <Link href={button.path} key={index} onClick={()=>handleActivate(button.path)}>
            <Flex
              style={button.path === selectedButton ? selectedButtonStyle : buttonStyle }
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
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#2A2D55",
    zIndex: 50,
  },
  scrolled: {
    position: "fixed",
    top: -100,
    width: "100%",
    backgroundColor: "#2A2D55",
    zIndex: 50,
  },
  top_nav: {
    width: "100%",
    height: '100px',
    color: "#eee",
  },
  logo: {
    padding: '10px',
    fontSize: "30px",
    color: "#eee",
  },
  settings_nav: {
    margin: 'auto 0',
  },
  faq: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#666",
    background: "#eee",
    fontWeight: 'bolder',
    width: '50px',
    height: '50px',
    marginRight: '30px',
    fontSize: '1.2rem',
    borderRadius: '100%',
  },
  lang: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#666",
    background: "#eee",
    fontWeight: 'bolder',
    width: '150px',
    height: '50px',
    marginRight: '30px',
    borderRadius: '5px',
  },
  bottom_nav: {
    width: "100%",
    height: '120px',
    display: "flex",
    alignItems: 'end',
    justifyContent: "center",
    backgroundColor: "#eee",
    boxShadow: '0 0 30px #555',
  },
  scrolled_nav: {
    width: "100%",
    height: '50px',
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#eee",
    boxShadow: '0 0 30px #555',
  },
  button: {
    color: "#333",
    width: '202px',
    height: '110px',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: "10px 20px 0 20px",
  },
  scrolled_button: {
    color: "#333",
    width: '202px',
    height: '50px',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: "10px 20px 0 20px",
  },
  selectedButton : {
    backgroundColor: '#CDD0EF',
    color: "#333",
    width: '202px',
    height: '110px',
    borderRadius: '15px 15px 0 0',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: "10px 20px 0 20px",
  },
  scrolled_selectedButton: {
    backgroundColor: '#CDD0EF',
    color: "#333",
    width: '202px',
    height: '65px',
    borderRadius: '0 0 15px 15px',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: "10px 20px 0 20px",
  },
};
