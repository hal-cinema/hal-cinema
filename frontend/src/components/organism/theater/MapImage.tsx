import { Flex } from '@/components/elements/box/Flex'
import { Styles } from '@/types/styles'
import Image from 'next/image'
import React from 'react'

type Props = {
  src: string;
};

const AccessMap = ( props: Props ) => {
  return (
    <>
      <Flex style={styles.container} direction="column" align='center'>
        <Image
          src={props.src}
          alt="ʕ◔ϖ◔ʔ"
          width={1000}
          height={1000}
          style={styles.mapContents}
        />
      </Flex>
    </>
  )
}

const styles: Styles = {
  container: {
    width: '1000px',
  },
  mapContents: {
    padding: "0 60px 60px 60px",
    background: "#fff"
  },
}

export default AccessMap