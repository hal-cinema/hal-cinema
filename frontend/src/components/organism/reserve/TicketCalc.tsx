'use client'
import { Flex } from '@/components/elements/box/Flex'
import TicketNum from '@/components/organism/reserve/TicketNum'
import { IsTicketsState } from '@/hooks/reserve/useProgressState'
import { Styles } from '@/types/styles'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

type Tickets = {
  name: string
  price: number
  count: number
}
const TicketCalc = () => {
  const TICKETS: Tickets[] = [
    {
      name: '大人',
      price: 1800,
      count: 0,
    },
    {
      name: '大学生',
      price: 1600,
      count: 0,
    },
    {
      name: '高校生',
      price: 1400,
      count: 0,
    },
    {
      name: '小人',
      price: 1000,
      count: 0,
    },
  ]
  const [ticketTotal, setTicketTotal] = useState<{ [key: string]: number }>({})
  const [ticketCounts, setTicketCounts] = useState<{ [key: string]: number }>({})

  const [selectTickets, setSelectTickets] = useRecoilState(IsTicketsState)

  const updateTicketCount = (name: string, count: number) => {
    setTicketCounts((prevState) => ({
      ...prevState,
      [name]: count,
    }))
  }

  const updateTotalPrice = (name: string, price: number, count: number) => {
    setTicketTotal(prevState => ({
      ...prevState,
      [name]: price * count
    }))
  }
  const handleSeatsSelect = () => {
    if(Object.values(ticketTotal).reduce((accept, current) => accept + current)){
      setSelectTickets(false)
    }
  }
  const handleTicketSelect = () => {
    setSelectTickets(true)
  }
  return (
    <>
      <Flex style={styles.container} direction='column'>
        {/* オーバーレイ表示 */}
        {!selectTickets && <div style={styles.overlay} onClick={handleTicketSelect} />}

        {/* 各種チケットの枚数指定 */}
        {TICKETS.map((tickets, index) => (
          <TicketNum
            key={index}
            label={tickets.name}
            price={tickets.price}
            count={tickets.count}
            updateTotalPrice={(name, price, count) => updateTotalPrice(tickets.name, price, count)}
            updateTicketCount={(name, count) => updateTicketCount(tickets.name, count)}
          />
        ))}

        {/* 合計枚数・金額の計算と出力 */}
        <Flex style={styles.resultBox} direction="column" justify='center' align="flex-start">
          {TICKETS.map((tickets, index) =>
            ticketCounts[tickets.name] !== 0
            ? (<Flex key={index} style={styles.ticketCountsLabel} direction='row' align='baseline'>
                <div style={styles.label}>{`${tickets.name}`}</div>
                <div style={styles.count}>{`${ticketCounts[tickets.name]}`}</div>枚
              </Flex>)
            : null
          )}
          <Flex style={styles.totalBox} direction='row' align='baseline'>
            <p>合計金額</p>
            <p style={styles.totalPrice}>{Object.values(ticketTotal).reduce((accept, current) => accept + current, 0)}</p>
            <p>円</p>
          </Flex>
        </Flex>

        {/* 座席選択へ遷移 */}
        <div style={styles.ticketSubmit} onClick={handleSeatsSelect}>座席選択へ進む</div>
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    height: '690px',
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    width: '334px',
    height: '690px',
    background: '#07072B66'
  },
  resultBox: {
    width: '300px',
    padding: '15px 20px',
    margin: '10px auto',
    userSelect: 'none',
    background: '#f3f3f3',
    borderRadius: '6px',
  },
  ticketCountsLabel: {
    width: '150px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  label: {
    width: '80px',
    fontSize: '1.1rem',
    textAlign: 'left',
  },
  count: {
    width: '20px',
    margin: '0 5px',
    fontSize: '1.5rem',
    textAlign: 'right',
  },
  totalBox: {
    width: '300px',
    fontSize: '1.1rem',
  },
  totalPrice: {
    width: '160px',
    margin: '0 5px',
    fontSize: '2rem',
    color: '#EA3372',
    textAlign: 'right',
  },
  ticketSubmit: {
    width: '300px',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    padding: '15px 20px',
    margin: '10px auto',
    userSelect: 'none',
    cursor: 'pointer',
    background: '#FF8C00',
    borderRadius: '6px',
  },
}

export default TicketCalc