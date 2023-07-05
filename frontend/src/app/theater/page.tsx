import { Flex } from '@/components/elements/box/Flex'
import { Header } from '@/components/layouts/header/Header'
import MapImage from '@/components/organism/theater/MapImage'
import ContentTitle from '@/components/organism/theater/ContentTitle'
import { Styles } from '@/types/styles'
import React from 'react'

const page = () => {
  return (
  <>
    <Header/>
    <Flex style={styles.container} direction="column" align="center">
      < ContentTitle label={"アクセス"} />
      <MapImage src={"./theater/accessmap.svg"} />
      < ContentTitle label={"館内マップ"} />
      <MapImage src={"./theater/theaterMap.svg"} />
    </Flex>
  </>
  )
}

const styles: Styles = {
  container: {
    width: "100%",
    background: "#eee",
  },
}

export default page