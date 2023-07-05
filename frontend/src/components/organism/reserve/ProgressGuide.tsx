import { Flex } from '@/components/elements/box/Flex'
import ProgressBox from '@/components/elements/box/ProgressBox'
import { Styles } from '@/types/styles'
import React from 'react'

const ProgressGuide = () => {
  return (
    <>
      <Flex direction='row' align='center'>
        <ProgressBox label={"券種選択"} isProgress={true} />
        <ProgressBox label={"座席指定"} isProgress={false} />
        <ProgressBox label={"お客様情報入力"} isProgress={false} />
        <ProgressBox label={"決済情報入力"} isProgress={false} />
        <ProgressBox label={"完了"} isProgress={false} />
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