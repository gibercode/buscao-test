
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const images = [
  { path: 'http://admin-buscao.thecodeworkers.com/wp-content/uploads/2021/02/pay-background.png', id: 'first' },
  { path: 'images/backgrounds/blackpoints-background.svg', id: 'second' },
  { path: 'images/backgrounds/blackpoints-background.svg', id: 'third' }
];

const Slider = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [up, setUp] = useState(true);

  useEffect(() => {
    sliding();
    if (currentImage == 2) setUp(false);
    if (currentImage == 1 && !up) setUp(true);
  }, [currentImage])

  const sliding = () => {
    const getElement = document.getElementById(images[currentImage].id);

    if (getElement) {
      getElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      if (currentImage >= 0 && currentImage < 2 && up) {
        return setCurrentImage(currentImage + 1);
      }
      if (currentImage <= 2) {
        if (currentImage >= 1) setCurrentImage(currentImage - 1);
        return;
      }
    }, 4000);
  }

  const checkStep = (step) => {
    if (currentImage === step) return styles._currentCircle;
    return styles._circle;
  }

  return (
    <div className={styles._sliderParent}>
      <div className={styles._sliderChild}>
        {
          images.map((image, index) => {
            return (
              <div className={styles._container} key={index}>
                <img src={image.path} width='100%' id={image.id} />
              </div>
            )
          })
        }
      </div>

      <div className={styles._stepper}>
        <div className={styles._steps}>
          <div className={checkStep(0)}></div>
          <div className={checkStep(1)}></div>
          <div className={checkStep(2)}></div>
        </div>
      </div>
    </div>
  )
};

export default Slider;
