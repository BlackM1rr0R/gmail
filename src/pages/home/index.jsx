import React from 'react';
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper/index'
import Hero from '../../components/hero';
import Main from '../../components/main';
import Logo from '../../components/logo';
import YusifAbout from '../../components/yusifabout';
import Hospital from '../../components/hospital';
import ChatApp from '../../components/chat';
import Certificates from '../../components/certificates';
import Questions from '../../components/questions';

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
      <Hospital/>
      <ChatApp/>
      <Certificates/>
      <Questions/>
    </Wrapper>
    </>
  )
  
};

export default Home;
