import React, {useEffect} from 'react';
import {Feature, Banner} from '../../components';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Feature />
    </>
  );
};
export default Home;
