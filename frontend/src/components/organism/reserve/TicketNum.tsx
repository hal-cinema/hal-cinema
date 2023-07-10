'use client'
import React, { useEffect, useState } from 'react'
import { Flex } from '../../elements/box/Flex'
import { Styles } from '@/types/styles'

type Props = {
  label: string
  price: number
  count: number
  updateTotalPrice: (name: string, price: number, count: number) => void
  updateTicketCount: (name: string, count: number) => void
}
const TicketNum = (props: Props) => {
  const [count, setCount] = useState<number>(props.count)

  useEffect(() => {
    props.updateTotalPrice(props.label, props.price, count)
    props.updateTicketCount(props.label, count)
  }, [count])

  const CountUp = () => {
    if (count >= 6){
      return
    }else {
      setCount(count + 1)
    }
  }
  const CountDown = () => {
    if (count <= 0){
      return
    }else{
      setCount(count - 1)
    }
  }
  
  return (
    <>
      <Flex style={styles.container} direction='row' justify='center' align='center'>
        <div style={styles.label}>{props.label}</div>
        <div style={styles.price}>{props.price}円</div>
        <div
          onClick={CountDown}
          style={styles.countDown}>
          <Flex
            justify='center'
            align='center'>－
          </Flex>
        </div>
        <div
          style={styles.countUp}
          onClick={CountUp}>
          <Flex
            justify='center'
            align='center'>＋
          </Flex>
        </div>
        <Flex style={styles.countContainer} direction='row' align='baseline'>
          <p style={styles.count}>{count}</p>枚
        </Flex>
      </Flex>
      {props.label!="小人" && <span style={styles.border} />}
    </>
  )
}

const styles: Styles= {
  container: {
    width: '310px',
    height: '30px',
    margin: '12px',
    userSelect: 'none',
  },
  label: {
    width: '60px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    margin: '0 10px',
  },
  price: {
    width: '60px',
    fontSize: '1rem',
    margin: '0 10px',
  },
  countUp: {
    width: '32px',
    height: '25px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color:'white',
    background: '#FF8C00',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '0 5px',
  },
  countDown: {
    width: '32px',
    height: '25px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color:'white',
    background: '#a6a6a6',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '0 5px',
  },
  countContainer: {
    width: '45px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textAlign: 'right',
    margin: '0 10px',
  },
  count: {
    width: '25px',
    margin: '5px',
    fontSize: '1.6rem',
  },
  border: {
    width: '87%',
    height: '1px',
    margin: '0 20px',
    background: '#999',
  },
}

export default TicketNum