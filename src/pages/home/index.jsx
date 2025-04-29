import React from "react";
import styles from './index.module.css'
import LeftList from "../../components/leftlist";
import AllMessage from "../../components/allmessage";
import Wrapper from "../../components/UI/wrapper";
const Home = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
      <div className={styles.controlContainer}>

        <LeftList />
        <AllMessage />
      </div>
      </Wrapper>
    </div>
  );
};

export default Home;
