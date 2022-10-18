import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const FooterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack onClick={onOpen}>
        <HamburgerIcon color={'white'} fontSize="3xl" />
      </Stack>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'white'} fontSize="lg" />

          <DrawerBody minH={'100vh'} bgColor={'rgb(16,17,45)'}>
            <Stack color='white' py="8" alignItems={'center'} spacing={'8'}>
              <Link _hover={{}}>Website</Link>
              <Link _hover={{}}>Telegram</Link>
              <Link _hover={{}}>Discord</Link>
              <Link _hover={{}}>Bonefolio</Link>
              <Link _hover={{}}>Twitter</Link>
              <Link _hover={{}}>Medium</Link>
              <Link _hover={{}}>Burn Portal</Link>
              <Link _hover={{}}>Contact Us</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FooterDrawer;
