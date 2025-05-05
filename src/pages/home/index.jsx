import React from "react";
import styles from './index.module.css'
import LeftList from "../../components/leftlist";
import Wrapper from "../../components/UI/wrapper";
import AllMessage from "../../components/allmessage";

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
