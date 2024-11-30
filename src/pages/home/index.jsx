import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper/index";
import Hero from "../../components/hero";
import Main from "../../components/main";
import Logo from "../../components/logo";
import YusifAbout from "../../components/yusifabout";
import Hospital from "../../components/hospital";
import ChatApp from "../../components/chat";

import Questions from "../../components/questions";
import SwiperComp from "../../components/swipercomp";
import LatestArticles from "../../components/latestarticles";

const Home = () => {
  return (
    <>
        <Hero />
      <Wrapper>
        <Main />
        <Logo />
        <YusifAbout />
        {/* <Hospital />
        <ChatApp /> */}
  <LatestArticles/>

      </Wrapper>
    </>
  );
};

export default Home;
