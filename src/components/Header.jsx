import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import coin from '../assets/images/coin.png';
import back from '../assets/images/back.png';
import './style.css';
import HeaderDrawer from './HeaderDrawer';
import {useNavigate} from 'react-router-dom';
import ContextWallet from '../context/ContextConnect';

const Header = () => {
  const {connectWallet, walletAddress, pfpBalance} = useContext(ContextWallet);
  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(0, 5)}...${addresstoString?.slice(addresstoString.length - 4)}`;
  const nav = useNavigate()
  return (
    <Stack py="1.5" px="2" w="100%">
      <Stack
        border={'2px solid rgb(35,37,53)'}
        borderRadius="xl"
        w={'100%'}
        direction="row"
        justifyContent={'space-between'}
        py="2"
        px="4"
        alignItems={'center'}
      >
        {/* left side */}
        <Stack spacing={'6'} direction={'row'}>
          <HStack
            spacing={'-1 !important'}
            justifyContent={'center'}
            textAlign="center"
            maxW={'48'}
          >
            <Image
              _hover={{ cursor: 'pointer' }}
              src={coin}
              w={{ base: '16', lg: '20' }}
            />
            <Text
              fontSize={{ base: 'sm', lg: 'lg' }}
              fontWeight="600"
              fontStyle={'italic'}
              color={'#f28b03'}
            >
              Muslim Digital Coin
            </Text>
          </HStack>
          <Box
            display={{ base: 'none', md: 'inherit' }}
            w="fit-content"
            p={{ base: '1', md: '2', lg: '4' }}
          >
            <Stack
              minW={'fit-content'}
              fontSize={{ base: 'xx-small', lg: 'md' }}
              spacing={{ base: '1', lg: '5' }}
              direction={'row'}
              className="bordered-button"
            >
              <Text>MDC Price</Text>
              <Text>$0.036</Text>
            </Stack>
          </Box>
        </Stack>
        {/* right side */}
        <Stack display={{ base: 'inherit', md: 'none' }}>
          <HeaderDrawer />
        </Stack>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          alignItems={'center'}
          spacing={'6'}
          direction={'row'}
        >
          <Button
            size={{ base: 'sm', lg: 'md' }}
            _hover={{}}
            rounded={'full'}
            color="white"
            bg="rgb(255,171,45)"
            onClick={() => connectWallet()}
          >
            {walletAddress ? (
                  <Text>
                    {addressString}
                  </Text>
                ) : (
                  <Text
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                    w={'fit-content'}
                    fontSize={'md'}
                    color={'white'}
                  >
                    Connect Wallet
                  </Text>
                )}
          </Button>
          <Box
            w="fit-content"
            p={{ base: '1', md: '2', lg: '4' }}
          >
            <Stack
              fontSize={{ base: 'xx-small', lg: 'md' }}
              spacing={{ base: '1', lg: '5' }}
              direction={'row'}
              className="bordered-button"
            >
              {/* <Text>Balance</Text>
               <Text>0 MDC</Text> */}
               <Text>Balance</Text>
               {pfpBalance ? (
                            <Text>{pfpBalance} MDC</Text>
                        ) : (
                            <Text>0 MDC</Text>
                        )
                        }
            </Stack>
          </Box>
          <Stack onClick={()=>nav('/')}>
          <Image  _hover={{ cursor: 'pointer' }} src={back} w={{ base: '16', lg: '20' }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
