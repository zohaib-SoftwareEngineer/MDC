import { Stack } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Wrapper = ({ children }) => {
  return (
    <Stack justifyContent={'space-between'} minH="100vh" bgColor={'rgb(16,17,45)'}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default Wrapper;
