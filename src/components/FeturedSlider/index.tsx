import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../../public/images/icons';
import { Card } from '../';
import { paginate } from '../../utils';
import { setSelectedCommerce } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Currency from '../Currency';

const FeaturedSlider = ({ posts }) => {
  const [sliderWidth, setSliderWidth] = useState('0%');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    calculateWidth();
  }, [])

  const nextOrPrevious = (param) => {
    let pagination = page;

    if (param == 'left' && page >= 2) pagination = pagination - 1;
    if (param == 'right' && page <= pagesArray() - 1) pagination = pagination + 1;

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

  const redirect = (commerce) => {
    const id = commerce.id;
    dispatch(setSelectedCommerce(id));
    router.push('/commerce');
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
                          return (
                            <div className={styles._cardsParent} key={index} onClick={() => redirect(item)}>
                              <Currency currenciesData={{ currencies: item?.commerce?.paymentmethods }}>
                                <Card
                                  content={item}
                                  phoneClass="_leftCard"
                                />
                              </Currency>
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
