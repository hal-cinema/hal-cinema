import { Flex } from '@/components/elements/box/Flex'
import { Styles } from '@/types/styles'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Flex justify='center' align='center' style={styles.container}>©︎ 2023 HAL CHINEMA All rights reserved.</Flex>
    </>
  )
}

const styles: Styles = {
    container: {
        width: '100%',
        height: '85px',
        backgroundColor: '#222550', 
        color: '#fff',
    },
}

export default Footer