
import { useRef } from 'react';
import styles from './styles.module.scss';

const Slider = () => {

  const slide = () => {
    const getElement = document.getElementById('second');

    if (getElement) {
      getElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className={styles._sliderParent}>
      <div className={styles._sliderChild}>

        <div className={styles._container}>
         <img src='images/backgrounds/blackpoints-background.svg' width='100%'/>
        </div>
        <div className={styles._container} id='second'>
         <img src='images/backgrounds/blackpoints-background.svg' width='100%'/>
        </div>

        <div className={styles._container} id='third'>
         <img src='images/backgrounds/blackpoints-background.svg' width='100%'/>
        </div>
      </div>

      <div className={styles._stepper}>
        <div className={styles._steps}>
            <div className={styles._circle}></div>
            <div className={styles._circle} onClick={slide} ></div>
            <div className={styles._circle}></div>
        </div>
      </div>
    </div>
  )
};

export default Slider;
