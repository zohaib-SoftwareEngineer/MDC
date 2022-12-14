import { Stack } from '@chakra-ui/react'
import React from 'react'
import Main from '../components/Main'
import Wrapper from '../components/Wrapper'

const Home = () => {
  return (
    <Wrapper>
      <Stack spacing={'48'} py='24'>
        <Main/>
        </Stack>
    </Wrapper>
  )
}

export default Home