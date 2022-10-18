import { Button, Grid, Link, Stack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import ContextWallet from '../context/ContextConnect';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { walletAddress, bnbBalance, usdtBalance, wbtcBalance, pfpBalance } =
    useContext(ContextWallet);
  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(
    0,
    5
  )}...${addresstoString?.slice(addresstoString.length - 4)}`;
  return (
    <Stack minH="100vh" bgColor={'rgb(16,17,45)'}>
      {/* <Header />
      <Cards/>
      <Footer/> */}
      {/* <Stack bgColor={'#0b0c22'} p={{base:'2',sm:'6'}}> */}
      {/* <Stack px={'8'}> */}
      {/* <Button
                        as={Link}
                        href='http://3.83.88.61/'
                        px={'2'}
                        py={'2'}
                        bgColor={'#23242A'}
                        border={'1px solid #fba826'}
                        color={'white'}
                        _hover={{ bgColor: '#e89a03' }}
                        borderRadius={'2xl'}
                    >
                        Back To Homepage
                    </Button> */}
      {/* </Stack> */}

      {/* <Stack spacing={'4'} direction={{ base: 'column-reverse', lg: 'row' }} alignItems={{ base: 'center', lg: 'inherit' }} py={'8'} px={{base:"2",md:"0",xl:"8"}} justify={'space-between'}> */}
      {/* Balance Cards */}
      {/* <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} gap={5} w={{ base: 'full', sm: 'full' }}>
                        <PFPBalanceCard img={card1} coin={pfp} balance={pfpBalance} address={addressString} network={'MDC'} />
                        <PFPBalanceCard img={card2} coin={bnb} balance={bnbBalance} address={addressString} network={'BNB'} />
                        <PFPBalanceCard img={card3} coin={wbtc} balance={wbtcBalance} address={addressString} network={'WBTC'} />
                        <PFPBalanceCard img={card4} coin={usdt} balance={usdtBalance} address={addressString} network={'USDT'} />
                    </Grid> */}
      {/* Swap Card */}
      {/* <Swap /> */}
      {/* </Stack> */}

      {/* <Stack align={'center'} w={'full'} p={{base:'2',sm:'6'}}> */}
      {/* <iframe title="Crypto Currencies" src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=100&pref_coin_id=1505&graph=yes" height="700px" width="100%"></iframe> */}
      {/* </Stack> */}

      {/* </Stack> */}
    </Stack>
  );
};

export default Dashboard;
