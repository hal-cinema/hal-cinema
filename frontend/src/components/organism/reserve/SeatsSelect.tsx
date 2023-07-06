'use client'
import { Flex } from '@/components/elements/box/Flex'
import { IsTicketsState } from '@/hooks/reserve/useProgressState'
import { Styles } from '@/types/styles'
import React from 'react'
import { useRecoilValue } from 'recoil'

const SeatsSelect = () => {
  const selectTickets = useRecoilValue(IsTicketsState)
  return (
    <>
      <Flex style={styles.container} justify='center'>
        {/* オーバーレイ */}
        {selectTickets && <Flex style={styles.overlay} justify='center' align='center'>
          ※左側で券種を選択してください
        </Flex>}
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    width: '710px',
    height: '690px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'red',
    background: '#07072B'
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    width: '710px',
    height: '690px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    background: '#07072Baa'
  },
}

export default SeatsSelect