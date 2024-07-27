import React from 'react';
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper/index'
import Hero from '../../components/hero';
import Main from '../../components/main';
import Logo from '../../components/logo';

const Home = () => {

  return (
    <>
    <div className={styles.background}>
        <Hero/>
    </div>
    <Wrapper>
      <Main/>
      <Logo/>
    </Wrapper>
    </>
  )
  
};

export default Home;
