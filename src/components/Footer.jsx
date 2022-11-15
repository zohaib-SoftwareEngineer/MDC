import { HStack, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterDrawer from './FooterDrawer';

const Footer = () => {
  const nav = useNavigate()
  return (
    <Stack
      fontWeight="600"
      fontSize={'sm'}
      justifyContent="space-between"
      pl={{base:'4',md:"8",lg:'20'}}
      pr="6"
      direction={'row'}
      bg="blackAlpha.700"
      py="2"
      alignItems={'center'}
    >
      <Stack display={{base:'inherit',md:'none'}}>
      <FooterDrawer/>
      </Stack>
      <HStack display={{base:'none',md:'inherit'}} spacing={'5'} color={'white'}>
        <Link _hover={{}}>Website</Link>
        <Link _hover={{}}>Telegram</Link>
        <Link _hover={{}}>Discord</Link>
        <Link _hover={{}}>Bonefolio</Link>
        <Link _hover={{}}>Twitter</Link>
        <Link _hover={{}}>Medium</Link>
        <Link _hover={{}}>Burn Portal</Link>
        <Link _hover={{}}>Contact Us</Link>
      </HStack>
      <Link _hover={{}} color='#f28b03'>FAQ</Link>
    </Stack>
  );
};

export default Footer;
