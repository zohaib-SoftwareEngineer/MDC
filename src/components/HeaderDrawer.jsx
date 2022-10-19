import React, { useContext }  from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useDisclosure,
  Box,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import back from '../assets/images/back.png';
import { useNavigate } from 'react-router-dom';
import ContextWallet from '../context/ContextConnect';

const HeaderDrawer = () => {
  const {connectWallet, walletAddress, pfpBalance} = useContext(ContextWallet);
  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(0, 5)}...${addresstoString?.slice(addresstoString.length - 4)}`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();
  return (
    <>
      <Stack onClick={onOpen}>
        <HamburgerIcon color={'white'} fontSize="3xl" />
      </Stack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'white'} fontSize="lg" />

          <DrawerBody minH={'100vh'} bgColor={'rgb(16,17,45)'}>
            <Stack py="8" alignItems={'center'} spacing={'8'}>
              <Stack
                onClick={() => {
                  nav('/');
                  onClose();
                }}
              >
                <Image
                  _hover={{ cursor: 'pointer' }}
                  src={back}
                  w={{ base: '16', lg: '20' }}
                />
              </Stack>

              <Button
                w={'200px'}
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
              <Box w="200px" p={'3'} >
                <Stack
                  fontSize="sm"
                  spacing={{ base: '1', lg: '5' }}
                  direction={'row'}
                  className="bordered-button"
                >
                  <Text>MDC Price</Text>
                  <Text>$0.036</Text>
                </Stack>
              </Box>

              <Box w={'200px'} p={'3'} >
                <Stack
                  fontSize="sm"
                  spacing={{ base: '1', lg: '5' }}
                  direction={'row'}
                  className="bordered-button"
                >
                  <Text>Balance</Text>
                  {pfpBalance ? (
                            <Text>{pfpBalance} MDC</Text>
                        ) : (
                            <Text>0 MDC</Text>
                        )
                        }
                </Stack>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
