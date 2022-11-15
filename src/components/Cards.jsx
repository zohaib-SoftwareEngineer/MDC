import { HStack, chakra, Image, Stack, Text, Button, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay, useDisclosure} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.png';
import card from '../assets/images/card.png';
import coin from '../assets/images/coin.png';
const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    // eslint-disable-next-line
    isOpen: isOpenInfo,
    // eslint-disable-next-line
    onOpen: onOpenInfo,
    // eslint-disable-next-line
    onClose: onCloseInfo,
  } = useDisclosure();

  const nav = useNavigate()
  return (
    <Stack w="100%" alignItems={'center'}>
      <Stack
      spacing={'6'}
        justifyContent={'space-between'}
        w={{ base: '90%',sm:'75%', md:'90%', lg:'75%' }}
        direction={{ base: 'column', md: 'row' }}
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
              Buy MDC Token
            </Text>
            <Image src={arrow} w="20" h="16" />
          </HStack>
          <Text mb={'-2 !important'} color="white" fontWeight={'600'}>
            {' '}
            <chakra.span color={'rgb(48,108,79)'}>Transaction </chakra.span>
            for MDC Token.
          </Text>
          <Image alignSelf={'end'} src={coin} w="32" />
          <Button
          onClick={()=>nav('/swap')}
            fontSize={'lg'}
            _hover={{}}
            rounded={'full'}
            w="48"
            color="white"
            bg="rgb(255,171,45)"
          >
            Buy Tokens
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
              BUY BNB
            </Text>
            <Image src={card} w="28" h="16" />
          </HStack>
          <Text mb={'-2 !important'} color="white" fontWeight={'600'}>
            {' '}
            Import <chakra.span color={'rgb(48,108,79)'}> BNB </chakra.span>by card.
          </Text>
          <Image alignSelf={'end'} src={coin} w="32" />
          <Button
            fontSize={'lg'}
            _hover={{}}
            rounded={'full'}
            w="48"
            color="white"
            bg="rgb(255,171,45)"
            onClick={onOpen}
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
                src="https://staging-global.transak.com/?apiKey=da2eef7d-9d65-41aa-a2db-ac45f711b880"
                height="600px"
                width="100%"
              ></iframe>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>

    </Stack>
  );
};

export default Cards;
