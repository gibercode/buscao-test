import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../../public/images/icons';
import { Card } from '../';
import { useSelector } from 'react-redux';
import { paginate } from '../../utils';

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const FeaturedSlider = ({ posts }) => {
  const [sliderWidth, setSliderWidth] = useState('0%');
  const [page, setPage] = useState(1);

  useEffect(() => {
    calculateWidth();
  }, [])

  const nextOrPrevious = (param) => {
    let pagination = page;

    if (param == 'left' && page >= 1) pagination = pagination - 1;
    if (param == 'right' && page <= pagesArray()) pagination = pagination + 1;

    const getElement = document.getElementById(pagination.toString());

    if (getElement) {
      getElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }

    setPage(pagination);
  }

  const processHour = (time) => {
    let newHour;

    if (time) {
      newHour = time.split(':')[0];
      return parseInt(newHour);
    }
  }

  const processMinutes = (time) => {
    let newMinutes;

    if (time) {
      newMinutes = time.split(':')[1];
      return Number(newMinutes);
    }
  }

  const calculateWidth = () => {
    const width = posts.length / 2;
    const stringWidth = width.toString();

    if (stringWidth.includes('.')) {
      const newWidth = (width + 0.5) * 100;
      setSliderWidth(`${newWidth}%`);
      return;
    }

    setSliderWidth(`${width}%`);
  }

  const pagesArray = () => {
    const length = posts.length / 2;
    const lengthRounded = Math.round(length);

    return lengthRounded;
  }

  return (
    <>
      <div className={styles._itemsParent}>
        <div className={styles._leftArrow} onClick={() => nextOrPrevious('left')}>
          <ArrowLeft color='#FFFFFF' />
        </div>
        <div className={styles._itemsChild}>
          <div className={styles._slider} style={{ width: sliderWidth }}>

            {
              Array(pagesArray()).fill(1).map((res, index) => {
                const page = index + 1;

                return (
                  <div className={styles._itemOne} id={page.toString()} key={index}>
                    <div className={styles._cards}>

                      {
                        paginate(posts, page, 2).map((item, index) => {
                          const { commerce } = item

                          const chechSchedule = () => {
                            const day = new Date().getDay();
                            const actualDay = days[day];
                            const hourClose = commerce.subsidiary[0].schedule[actualDay].cierre;
                            const hourClosed = processHour(hourClose);
                            const minutesClosed = processMinutes(hourClose);
                            const currentHour = new Date().getHours();
                            const currentMinutes = new Date().getMinutes();

                            if (minutesClosed == 0) {
                              if (hourClosed <= currentHour) return false;
                            }

                            if (minutesClosed > 0) {
                              if (currentMinutes > minutesClosed && hourClosed <= currentHour) return false;
                            }

                            return checkOpen(currentHour, currentMinutes, actualDay) ? true : false;
                          }

                          const checkOpen = (currentHour, currentMinutes, actualDay) => {
                            const openHour = commerce.subsidiary[0].schedule[actualDay].apertura;
                            const hourOpen = processHour(openHour);
                            const minutesOpen = processMinutes(openHour);

                            if (minutesOpen == 0) {
                              if (hourOpen >= currentHour) return false

                              if (minutesOpen > 0) {
                                if (currentMinutes < minutesOpen) return false;
                              }

                              return true;
                            }
                          }

                          return (
                            <div className={styles._cardsParent} key={index}>
                              <Card
                                name={item.title}
                                address={commerce.subsidiary ? item?.commerce?.subsidiary[0]?.address : null}
                                url={commerce?.image}
                                description={commerce?.description}
                                phone={item?.commerce?.subsidiary[0]?.phoneNumber}
                                status={chechSchedule()}
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className={styles._rightArrow} onClick={() => nextOrPrevious('right')}>
          <ArrowRight color='#FFFFFF' />
        </div>
      </div>
    </>
  )
};

export default FeaturedSlider;
