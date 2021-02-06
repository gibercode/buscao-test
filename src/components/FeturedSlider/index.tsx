import styles from './styles.module.scss';
import { useState, useRef } from 'react';
import { Clock, ArrowLeft, ArrowRight, Location } from '../../../public/images/icons';

const FeaturedSlider = () => {

  const [sliderWidth, setSliderWidth] = useState('300%');
  const second = useRef();
  const parent = useRef(null);

  const arrows = (ref) => {
    document.querySelector(ref).scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className={styles._itemsParent}>
        <div className={styles._leftArrow} onClick={() => arrows("#first")}>
          <ArrowLeft color='#3D549E' />
        </div>
        <div className={styles._itemsChild} ref={parent}>
          <div className={styles._slider} style={{ width: sliderWidth }}>
            <div className={styles._itemOne} id="first" >
              <div className={styles._cards}>
                <div className={styles._cardsParent}>
                  {Card()}
                </div>

                <div className={styles._cardsParent}>
                  {Card()}
                </div>
              </div>
            </div>
            <div className={styles._itemTwo} ref={second} id="second">
            <div className={styles._cards}>
                <div className={styles._cardsParent}>
                  {Card()}
                </div>

                <div className={styles._cardsParent}>
                  {Card()}
                </div>
              </div>
            </div>
            <div className={styles._itemThree} id="tres">item3</div>
          </div>
        </div>
        <div className={styles._rightArrow} onClick={() => arrows("#second")} >
        <ArrowRight color='#3D549E' />
        </div>
      </div>

      {/* <div className={styles._card}>

        <div className={styles._imageParent}>
          <img src='images/logos/excelsior-gama-logo.svg' width="40%"></img>
        </div>

        <div className={styles._minicard}>
          <div>
            <p className={styles._title}>Excelsior gama</p>
            <p className={styles._text}>Supermercados, Alimentos, Charcuteria </p>
          </div>

          <div className={styles._rightText}>
            <p className={styles._statusText} >ABIERTO</p>
            <Clock  color='#4A973C'/>
          </div>

        </div>
      </div> */}


    </>
  )
};

const Card = () => (
  <>
  <div className={styles._card}>

    <div className={styles._imageParent}>
      <img src='images/logos/excelsior-gama-logo.svg' width='40%'></img>
    </div>

    <div className={styles._minicard}>
      <div>
        <p className={styles._title}>Excelsior gama</p>
        <p className={styles._text}>Supermercados, Alimentos, Charcuteria </p>
      </div>

      <div className={styles._rightText}>
        <p className={styles._statusText} >ABIERTO</p>
        <Clock color='#4A973C' />
      </div>

    </div>
  </div>

  <div className={styles._infoParent}>
    <div className={styles._call}>
      <p>+ 58 424 1872382</p>
    </div>

    <div className={styles._location}>
      <p>Caracas</p>
      <Location color='#828282' />
    </div>
  </div>

  </>
);

export default FeaturedSlider;
