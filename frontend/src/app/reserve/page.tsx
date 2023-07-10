import { Flex } from '@/components/elements/box/Flex'
import { Header } from '@/components/layouts/header/Header'
import ProgressGuide from '@/components/organism/reserve/ProgressGuide'
import SeatsSelect from '@/components/organism/reserve/SeatsSelect'
import TicketCalc from '@/components/organism/reserve/TicketCalc'
import { Styles } from '@/types/styles'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Flex style={styles.container} direction="column" align="center">
        <ProgressGuide />
        <Flex direction='row' align='center'>
          <TicketCalc />
          <SeatsSelect />
        </Flex>
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    width: "100%",
    background: "#fff",
  },
}

export default page