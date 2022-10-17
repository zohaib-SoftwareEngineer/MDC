import { HStack, chakra, Image, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import arrow from '../assets/images/arrow.png';
import card from '../assets/images/card.png';
import coin from '../assets/images/coin.png';
const Cards = () => {
  return (
    <Stack mt="32 !important" w="100%" alignItems={'center'}>
      <Stack justifyContent={'space-between'} w={'65%'} direction="row">
        <Stack
          boxShadow={
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
          }
          w="45%"
          p="4"
          borderRadius={'3xl'}
          bg="rgb(38,41,54)"
        >
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text color={'white'} fontWeight="700" fontSize={'2xl'}>
              SWAP
            </Text>
            <Image src={arrow} w="20" h='16' />
          </HStack>
          <Text mb={'-2 !important'} color="white" fontWeight={'600'}>
            {' '}
            <chakra.span color={'rgb(48,108,79)'}> Swap</chakra.span> your token
            for MDC.
          </Text>
          <Image alignSelf={'end'} src={coin} w="32" />
          <Button fontSize={'lg'} _hover={{}} rounded={'full'} w='48' color='white' bg='rgb(255,171,45)'>Swap Tokens</Button>
        </Stack>
        <Stack
          boxShadow={
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
          }
          w="45%"
          p="4"
          borderRadius={'3xl'}
          bg="rgb(38,41,54)"
        >
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text color={'white'} fontWeight="700" fontSize={'2xl'}>
              BUY BY CARD
            </Text>
            <Image src={card} w="28" h='16' />
          </HStack>
          <Text mb={'-2 !important'} color="white" fontWeight={'600'}>
            {' '}
            <chakra.span color={'rgb(48,108,79)'}> Swap</chakra.span> your token
            for MDC.
          </Text>
          <Image alignSelf={'end'} src={coin} w="32" />
          <Button fontSize={'lg'} _hover={{}} rounded={'full'} w='48' color='white' bg='rgb(255,171,45)'>Swap Tokens</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cards;
