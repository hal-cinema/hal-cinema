import { Flex } from '@/components/elements/box/Flex'
import { Header } from '@/components/layouts/header/Header'
import AccessMap from '@/components/organism/theater/AccessMap'
import PageTitle from '@/components/organism/theater/PageTitle'
import { Styles } from '@/types/styles'
import React from 'react'

const page = () => {
  return (
  <>
    <Header/>
    <Flex style={styles.container} direction="column" align="center">
      <PageTitle />
      <AccessMap />
    </Flex>
  </>
  )
}

const styles: Styles = {
  container: {
    width: "100%",
    height: "100vh",
    background: "#eee",
  },
}

export default page