import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Slider = ({ page }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [up, setUp] = useState(true);

  useEffect(() => {
    sliding();
    if (currentImage == 2) setUp(false);
    if (currentImage == 1 && !up) setUp(true);
  }, [currentImage])

  const sliding = () => {
    const getElement = document.getElementById(page.slideshow[currentImage].image.id);

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
    if (currentImage == step) return styles._currentCircle;
    return styles._circle;
  }

  return (
    <div className={styles._sliderParent}>
      <div className={styles._sliderChild}>
        {
         page?.slideshow.slice(0, 3).map((item, index) => {
            return (
              <div className={styles._container} key={index} id={item.image.id}>
                <div style={{backgroundImage: `url(${item.image.sourceUrl})`}} className={styles._divImage}>
                  <div className={styles._textParent}>
                    <div className={styles._textChild}>
                      <div dangerouslySetInnerHTML={{__html: item?.text}} className={styles._wpContent}/>
                    </div>
                  </div>
                </div>
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
