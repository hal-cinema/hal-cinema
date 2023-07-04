import { Flex } from '@/components/elements/box/Flex'
import { Styles } from '@/types/styles'
import React from 'react'

const PageTitle = () => {
  return (
    <>
      <Flex style={styles.container} direction='column' align='flex-start'>
        <h1 style={styles.title}>アクセス</h1>
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    width: '1000px',
    textAlign: 'left',
    background: '#fff'
  },
  title: {
    margin: '40px 20px 0 60px',
    paddingLeft: '15px',
    borderLeft: '10px solid #cdf'
  },
}

export default PageTitle