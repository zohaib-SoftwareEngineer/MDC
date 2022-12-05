import { Stack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../components/Cards'
import HowToStart from '../components/HowToStart'
import Wrapper from '../components/Wrapper'

const Home = () => {
  return (
    <Wrapper>
      <Stack spacing={'48'} py='24'>
        <HowToStart/>
        </Stack>
    </Wrapper>
  )
}

export default Home