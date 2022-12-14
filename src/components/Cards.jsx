import { HStack, chakra, Image, Stack, Text, Button, Modal, VStack,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay, useDisclosure} from '@chakra-ui/react';
  import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextWallet from '../context/ContextConnect';
import transakSDK from '@transak/transak-sdk'
import wallet from '../assets/images/wallet.png';
import arrow from '../assets/images/arrow.png';
import card from '../assets/images/ATMO.png';
import coin from '../assets/images/coin.png';
const Cards = () => {
  const {connectWallet, walletAddress, pfpBalance} = useContext(ContextWallet);
  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(0, 5)}...${addresstoString?.slice(addresstoString.length - 4)}`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    // eslint-disable-next-line
    isOpen: isOpenInfo,
    // eslint-disable-next-line
    onOpen: onOpenInfo,
    // eslint-disable-next-line
    onClose: onCloseInfo,
  } = useDisclosure();
  const launchTransak = ()=>{
    let transak = new transakSDK({
      apiKey: 'da2eef7d-9d65-41aa-a2db-ac45f711b880',  // Your API Key
      environment: 'STAGING', // STAGING/PRODUCTION
      widgetHeight: '625px',
      widgetWidth: '500px',
      // Examples of some of the customization parameters you can pass
      defaultCryptoCurrency: 'BNB', // Example 'ETH'
      walletAddress: walletAddress, // Your customer's wallet address
      themeColor: '#f28b03', // App theme color
      fiatCurrency: 'EUR', // If you want to limit fiat selection eg 'GBP'
      email: 'zohaibsaddiqui@gmail.com', // Your customer's email address
      redirectURL: '' // Redirect URL of your app    
  });
  transak.init();
  // console.log(1122)
  }

  const nav = useNavigate()
  return (
    <Stack w="100%" alignItems={'center'}>
        <VStack alignItems={'center'} justifyContent={'space-between'}>
           <Text
              fontSize={{ base: 'sm', lg: 'xl' }}
              fontWeight="600"
              color={'#f28b03'}
            >
              IMPORTANT INSTRUCTIONS
            </Text>
            <Text
              fontSize={{ base: 'sm', lg: 'lg' }}
              fontWeight="600"
              color={'white'}
              w={{ base: '90%',sm:'75%', md:'90%', lg:'48%' }}
              textAlign={'center'}



            >
              We recommend to BUY / SWAP  only from a computer First you need to click on “Connect Wallet” If you don’t have MetaMask plugin (on Chrome), you will be redirected to download it

            </Text>

            </VStack>
      <Stack
      spacing={'6'}
        justifyContent={'space-between'}
        w={{ base: '90%',sm:'75%', md:'90%', lg:'75%' }}
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        p="8"
        // mt={'4 !important'}
        
      >
        
        <Stack
          boxShadow={
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
          }
          _hover={{ cursor: 'pointer', transform: 'Scale(1.05)', transition: '0.8s' }}
          w={{ base: '100%', lg: '45%' }}
          p="4"
          borderRadius={'3xl'}
          bg="rgb(38,41,54)"
        >
        
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text color={'white'} fontWeight="700" fontSize={'2xl'}>
              SWAP
            </Text>
            <Image src={arrow} w="20" h="16" />
          </HStack>
          <Text mb={'-2 !important'} color="rgb(255,171,45)" fontWeight={'600'}>
            {' '}
            {/* Import <chakra.span color={'rgb(48,108,79)'}> BNB </chakra.span>by card. */}
            Swap your tokens (BNB, BTC, USDT) to MDC 

          </Text>
          <Image alignSelf={'end'} src={coin} w="32" />
          <Button
          onClick={()=>nav('/swap')}
            fontSize={'lg'}
            _hover={{}}
            rounded={'full'}
            w="48"
            color="white"
            bg={walletAddress?"rgb(255,171,45)":'#B2BEB5'}
            // bg={walletAddress?"rgb(255,171,45)":'#848884'}
            disabled={walletAddress?false:true}
          >
            Swap Tokens
          </Button>
        </Stack>
        <Stack
          boxShadow={
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
          }
          _hover={{ cursor: 'pointer', transform: 'Scale(1.05)', transition: '0.8s' }}
          w={{ base: '100%', lg: '45%' }}
          p="4"
          borderRadius={'3xl'}
          bg="rgb(38,41,54)"
        >
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text color={'white'} fontWeight="700" fontSize={'2xl'}>
              BUY BY CARD
            </Text>
            {/* <Image src={card} w="28" h="16" /> */}
          </HStack>
          <Text mb={'-2 !important'} color="rgb(255,171,45)" fontWeight={'600'}>
            {' '}
            {/* Import <chakra.span color={'rgb(48,108,79)'}> BNB </chakra.span>by card. */}
            BUY with credit/debit card  BNB, WBTC, USDT And SWAP to MDC


          </Text>
          <Image alignSelf={'end'} src={card}  w="36"/>
          <Button
            fontSize={'lg'}
            _hover={{}}
            rounded={'full'}
            w="48"
            color="white"
            bg={walletAddress?"rgb(255,171,45)":'#B2BEB5'}
            disabled={walletAddress?false:true}
            onClick={launchTransak}
          >
            Buy Tokens
          </Button>
        </Stack>
      </Stack>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={'6'}>
              <iframe
                title="Crypto Currencies"
                // src="https://staging-global.transak.com/?apiKey=da2eef7d-9d65-41aa-a2db-ac45f711b880?network=bsc"
                height="600px"
                width="100%"
              ></iframe>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
            size={{ base: 'sm', lg: 'md' }}
            _hover={{}}
            rounded={'8'}
            color="white"
            bg="rgb(255,171,45)"
            onClick={() => connectWallet()}
            display={walletAddress?'none':'inherit'}
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
    </Stack>
  );
};

export default Cards;
