
import { useRef } from 'react';
import styles from './styles.module.scss';


const Slider = () => {

  const second = useRef();
  return (
    <div className={styles._sliderParent}>
      <div className={styles._sliderChild}>
        <img src='images/backgrounds/blackpoints-background.svg' width='100%' height='100%' />
        <img src='images/backgrounds/blackpoints-background.svg' width='100%' height='100%' ref={second}/>
        <img src='images/backgrounds/blackpoints-background.svg' width='100%' height='100%' />
      </div>

      <div className={styles._stepper}>
        <div className={styles._steps}>
            <div className={styles._circle}></div>
            <div className={styles._circle} ></div>
            <div className={styles._circle}></div>
        </div>
      </div>
    </div>
  )
};

export default Slider;
