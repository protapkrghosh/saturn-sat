import AboutToken from '@/components/sections/AboutToken/AboutToken';
import Banner from '@/components/sections/Banner/Banner';
import TheSatToken from '@/components/sections/TheSatToken/TheSatToken';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <TheSatToken />
      <AboutToken />
      <Tokenomics />
    </>
  );
};

export default Home;