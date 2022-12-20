import { Heading, Image, Stack, Text, chakra, Link, Button } from '@chakra-ui/react';
import meta from '../assets/images/metamask.png';
import binanceToMetamask from '../assets/images/binanceToMetamask.png';
import React, { useContext } from 'react';
import ContextWallet from '../context/ContextConnect';
import wallet from '../assets/images/wallet.png';
import { useNavigate } from 'react-router-dom';

const HowToStart = () => {
  const nav = useNavigate()
  const {connectWallet, walletAddress, pfpBalance} = useContext(ContextWallet);
  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(0, 5)}...${addresstoString?.slice(addresstoString.length - 4)}`;
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
      <Stack px="12" spacing={{base:'12',md:''}} justifyContent={'space-around'} alignItems={'center'} direction={{base:'column',md:'row'}}>
        <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
          <Image w={'48'} src={meta} />
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>1. INSTALL METAMASK</Text>
          <Text
            textAlign={'center'}
            color="white"
            fontSize="sm"
        
          >
            Go to MetaMask and install the Chrome extension (
            
            <chakra.span color="#f28b03" _hover={{ cursor: 'pointer' }}>
             <Link href='https://metamask.io/' target={'_blank'}>CLICK HERE</Link>
            </chakra.span>
            ). We recommend to install MetaMask plugin only from a computer.
          </Text>
        </Stack>
        <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
          <Image w={'30'} src={wallet} />
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>2. CREATE YOUR WALLET</Text>
          <Text
            textAlign={'center'}
            color="white"
            fontSize="sm"
            
          >
            Once you have installed you MetaMask plugin on Chrome, follow the steps, create your wallet and then click on

          </Text>
          <Button
                      size={{ base: 'sm', lg: 'md' }}
                      _hover={{}}
                      rounded={'8'}
                      color="white"
                      bg="rgb(255,171,45)"
                      onClick={()=>nav('/cards')}
                    >
                      
                            <Text
                              textOverflow={'ellipsis'}
                              overflow={'hidden'}
                              w={'fit-content'}
                              fontSize={'md'}
                              color={'white'}
                            >
                              Continue to Connect Wallet
                            </Text>
                          
                    </Button>
        </Stack>
        {/* <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
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
        </Stack> */}
      </Stack>
    </Stack>
  );
};

export default HowToStart;
