'use client'
import { Styles } from '@/types/styles'
import React from 'react'
import { Flex } from '../../elements/box/Flex'

type Props = {
  label: string;
  isProgress: boolean;
}

const ProgressBox = (props: Props) => {
  return (
    <>
      <Flex style={styles.container} direction='row' justify='center' align='center'>
        <Flex style={!props.isProgress
          ? styles.guideText
          : styles.guideTextActive} justify='center' align='center'>{props.label}
        </Flex>
        {props.label!="完了" &&
          <span style={!props.isProgress
            ? styles.arrow
            : styles.arrowActive}/>
        }
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    margin: '70px -5px',
  },
  guideText: {
    width: '180px',
    padding: '20px 0',
    borderRadius: '6px',
    background: '#eee',
    color: '#777',
  },
  guideTextActive: {
    width: '180px',
    padding: '20px 0',
    borderRadius: '6px',
    background: '#222550',
    color: '#fff',
  },
  arrow: {
    width: '47px',
    height: '47px',
    borderRadius: '6px',
    rotate: '45deg',
    transform: 'translateX(-20px)translateY(20px)',
    background: '#eee',
  },
  arrowActive: {
    width: '47px',
    height: '47px',
    borderRadius: '6px',
    rotate: '45deg',
    transform: 'translateX(-20px)translateY(20px)',
    background: '#222550',
  }
}

export default ProgressBox