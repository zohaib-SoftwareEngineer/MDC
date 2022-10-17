import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import coin from '../assets/images/coin.png';
import back from '../assets/images/back.png';
import './style.css';
const Header = () => {
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
      >
        {/* left side */}
        <Stack spacing={'6'} direction={'row'}>
          <HStack
            spacing={'-1 !important'}
            justifyContent={'center'}
            textAlign="center"
            maxW={'48'}
          >
            <Image _hover={{ cursor: 'pointer' }} src={coin} w="20" />
            <Text
              fontSize={'lg'}
              fontWeight="600"
              fontStyle={'italic'}
              color={'#f28b03'}
            >
              Muslim Digital Coin
            </Text>
          </HStack>
          <Box w="fit-content" p="4" bg="rgb(13,16,26)">
            <Stack spacing={'5'} direction={'row'} className="bordered-button">
              <Text>MDC Price</Text>
              <Text>$0.036</Text>
            </Stack>
          </Box>
        </Stack>
        {/* right side */}
        <Stack spacing={'6'} direction={'row'}>
          <Box w="fit-content" p="4" bg="rgb(13,16,26)">
            <Stack spacing={'4'} direction={'row'} className="bordered-button">
              <Text>Balance</Text>
              <Text>0 MDC</Text>
            </Stack>
          </Box>
          <Image _hover={{cursor:'pointer'}} src={back} w='20' />
        </Stack>

      </Stack>
    </Stack>
  );
};

export default Header;
