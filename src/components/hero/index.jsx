import React from 'react'
import styles from './index.module.css'
import Photo from '../../assets/images/yusif1.png'
const Hero = () => {
  return (
    <div className={styles.images}>
      <img src={Photo} alt="" />
    </div>
  )
}

export default Hero