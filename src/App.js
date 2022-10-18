import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ContextConnect } from './context/ContextConnect';
import Mainroutes from './routes/Mainroutes';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <ContextConnect>
        <Mainroutes/>
      </ContextConnect>
    </ChakraProvider>
  );
}

export default App;
