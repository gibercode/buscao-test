import { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';

const Slider = ({ page }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [up, setUp] = useState(true);
  const parent = useRef(null);

  useEffect(() => {
    sliding(currentImage);
    if (currentImage == 2) setUp(false);
    if (currentImage == 1 && !up) setUp(true);
  }, [currentImage])

  const sliding = (value) => {

    const getElement = document.getElementById(page.slideshow[currentImage].image.id);
    let offset = getElement.getBoundingClientRect()?.left;

    let offsetString = offset?.toString();

    if (offsetString?.includes('-')) {
      const newOffset = offsetString?.replace('-', '');
      offset = Number(newOffset);
    }

    if (value == 2) offset = offset += offset;
    if (value == 1) offset = offset;

    parent.current.scrollTo({
      left: value == 0 ? 0 : offset,
      behavior: 'smooth'
    });

    setTimeout(() => {
      if (currentImage >= 0 && currentImage < 2 && up) {
        return setCurrentImage(currentImage + 1);
      }
      if (currentImage <= 2) {
        if (currentImage >= 1) setCurrentImage(currentImage - 1);
        return;
      }
    }, 5000);
  }

  const checkStep = (step) => {
    if (currentImage == step) return styles._currentCircle;
    return styles._circle;
  }

  return (
    <>
      <div className={styles._parent}>
        <div className={styles._sliderParent} ref={parent} >
          <div className={styles._sliderChild}>
            {
              page?.slideshow.slice(0, 3).map((item, index) => {
                return (
                  <div className={styles._container} key={index} id={item?.image?.id}>
                    <div style={{ backgroundImage: `url(${item.image.sourceUrl})` }} className={styles._divImage} >
                      <div className={styles._textParent} >
                        <div className={styles._textChild}>
                          <div dangerouslySetInnerHTML={{ __html: item?.text }} className={styles._wpContent} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={styles._stepper}>
          <div className={styles._steps}>
            <div className={checkStep(0)}></div>
            <div className={checkStep(1)}></div>
            <div className={checkStep(2)}></div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Slider;
