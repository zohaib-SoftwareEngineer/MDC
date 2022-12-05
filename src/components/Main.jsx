import { Heading, Image, Stack, Text, chakra, Link, Button } from '@chakra-ui/react';
import meta from '../assets/images/metamask.png';
import binanceToMetamask from '../assets/images/binanceToMetamask.png';
import React, { useContext } from 'react';
import ContextWallet from '../context/ContextConnect';
import wallet from '../assets/images/wallet.png';
import { useNavigate } from 'react-router-dom';

const HowToStart = () => {
  const nav = useNavigate()
  return (
    <Stack spacing={'4'} pb="6" alignItems={'center'} w={'100%'}>
      {/* <Heading
        textAlign={'center'}
        textDecorationLine={'underline'}
        color={'white'}
        fontSize={{base:'2xl',md:"4xl"}}
        fontStyle={'italic'}
      >
        HOW TO START
      </Heading> */}
      <Stack px="12" spacing={{base:'12',md:''}} justifyContent={'space-around'} direction={{base:'column',md:'row'}}>
        <Stack alignItems={'center'} w={{base:'100%',md:'100%'}} spacing='6'>
          <Text color="#f28b03" fontSize={{base:'sm',lg:'md'}}>Do you have a MetaMask Wallet?</Text>
          <Image w={'48'} src={meta} />
          
        </Stack>
        {/* <Stack alignItems={'center'} w={{base:'100%',md:'30%'}} spacing='6'>
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
                      rounded={'full'}
                      color="white"
                      bg="rgb(255,171,45)"
                      onClick={()=>nav('/swap')}
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
        </Stack> */}
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
      <Stack px="12" spacing={{base:'12',md:''}} justifyContent={'space-around'} direction={{base:'column',md:'row'}}>
        <Stack alignItems={'center'} justifyContent={'space-around'} w={{base:'100%',md:'30%'}} spacing='6'>
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
                              Yes
                            </Text>
                          
                    </Button>

                    <Button
                      size={{ base: 'sm', lg: 'md' }}
                      _hover={{}}
                      rounded={'8'}
                      color="white"
                      bg="rgb(255,171,45)"
                      onClick={()=>nav('/HowToStart')}
                    >
                      
                            <Text
                              textOverflow={'ellipsis'}
                              overflow={'hidden'}
                              w={'fit-content'}
                              fontSize={'md'}
                              color={'white'}
                            >
                              No
                            </Text>
                          
                    </Button>
          </Stack>
          </Stack>
    </Stack>
  );
};

export default HowToStart;
