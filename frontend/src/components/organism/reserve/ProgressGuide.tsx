'use client'
import { Flex } from '@/components/elements/box/Flex'
import ProgressBox from '@/components/organism/reserve/ProgressBox'
import { Styles } from '@/types/styles'
import React from 'react'
import { IsTicketsState } from '@/hooks/reserve/useProgressState'
import { useRecoilValue } from 'recoil'

type Progress = {
  label: string
  isProgress: boolean
}

const ProgressGuide = () => {
  const PROGRESS: Progress[] = [
    {
      label: "券種選択",
      isProgress: true
    },
    {
      label: "座席指定",
      isProgress: false
    },
    {
      label: "お客様情報入力",
      isProgress: false
    },
    {
      label: "決済情報入力",
      isProgress: false
    },
    {
      label: "完了",
      isProgress: false
    },
  ]

  const selectTickets = useRecoilValue(IsTicketsState)
  if(selectTickets){
    PROGRESS[0].isProgress = true
    PROGRESS[1].isProgress = false
  }else if(!selectTickets){
    PROGRESS[0].isProgress = false
    PROGRESS[1].isProgress = true
  }

  return (
    <>
      <Flex direction='row' align='center'>
        {PROGRESS.map((progress, index) => (
          <ProgressBox key={index} label={progress.label} isProgress={progress.isProgress} />
        ))}
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    width: "100%",
  },
}


export default ProgressGuide