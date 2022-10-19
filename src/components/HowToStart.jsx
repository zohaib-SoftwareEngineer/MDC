import { Heading, Image, Stack, Text, chakra, Link, LinkBox } from '@chakra-ui/react';
import React from 'react';
import meta from '../assets/images/metamask.png';
import binanceToMetamask from '../assets/images/binanceToMetamask.png';
import binanceToMDC from '../assets/images/binanceToMDC.png';
const HowToStart = () => {
  return (
    <Stack spacing={'4'} pb="6" alignItems={'center'} w={'100%'}>
      <Heading
        textAlign={'center'}
        textDecorationLine={'underline'}
        color={'white'}
        fontSize={{base:'2xl',md:"4xl"}}
        fontStyle={'italic'}
      >
        HOW TO START
      </Heading>
      <Stack px="12" spacing={{base:'12',md:''}} justifyContent={'space-between'} direction={{base:'column',md:'row'}}>
        <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
          <Image w={'48'} src={meta} />
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>1. INSTALL METAMASK</Text>
          <Text
            textAlign={'center'}
            color="white"
            fontSize="sm"
            fontStyle="italic"
          >
            Go to MetaMask 
            
            <chakra.span color="blue.500" _hover={{ cursor: 'pointer' }}>
             <Link href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'>(CLICK HERE) </Link>
            </chakra.span>
            and install the Chrome extension. Follow the steps on that guide and
            finish setting up the extension.
          </Text>
        </Stack>
        <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
          <Image w={'60'} src={binanceToMetamask} />
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>2. SEND $BNB TO METAMASK</Text>
          <Text
            textAlign={'center'}
            color="white"
            fontSize="sm"
            fontStyle="italic"
          >
            Buy BNB through{' '}
            <chakra.span color="#f28b03">
              “BUY BY CARD”
            </chakra.span>{' '}
            or transfer it to your MetaMask wallet address from another wallet
            (e.g. Binance).
          </Text>
        </Stack>
        <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
          <Image w={'60'} src={binanceToMDC} />
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>3. SWAP $BNB FOR $mdc</Text>
          <Text
            textAlign={'center'}
            color="white"
            fontSize="sm"
            fontStyle="italic"
          >
            Connect your Metamask wallet to the MDC site by{' '}
            <chakra.span color="#f28b03">
              “Connect wallet”
            </chakra.span>{' '}
            , then enter the amount of $BNB (smartchain) you would like to swap
            for $MDC.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HowToStart;
