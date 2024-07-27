import React from 'react';
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper/index'
import Hero from '../../components/hero';
import Main from '../../components/main';
import Logo from '../../components/logo';
import YusifAbout from '../../components/yusifabout';

const Home = () => {

  return (
    <>
    <div className={styles.background}>
        <Hero/>
    </div>
    <Wrapper>
      <Main/>
      <Logo/>
      <YusifAbout/>
    </Wrapper>
    </>
  )
  
};

export default Home;
