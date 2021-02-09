import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from '../../../public/images/icons';
import { Card } from '../';
import { useSelector } from 'react-redux';
import { getCategories } from '../../store/actions'
import { wrapper } from '../../store';

const FeaturedSlider = () => {

  const { featured } = useSelector(state => state.featured);
  const [sliderWidth, setSliderWidth] = useState('150%');
  const [ page, setPage ] = useState(1);

  const nextOrPrevious = (param) => {

    let pagination = page;

    if(param == 'left' && page >= 1) pagination = pagination - 1;
    if(param == 'right' && page <= 2 ) pagination = pagination + 1;

    const getElement = document.getElementById(pagination.toString())

    if(getElement) {
      getElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setPage(pagination);
  }

  const limitArray = (first, second) => {
    const newArray = featured.slice(first, second);
    return newArray;
  }

  const calculateWidth = () => {
    const width = featured.length / 2 ;
    const stringWidth = width.toString();

    if(stringWidth.includes('.')) {
      const newWidth = (width + 0.5) * 100;
      setSliderWidth(`${newWidth}%`);
      return;
    }

    setSliderWidth(`${width}%`);
  }

  useEffect(() => {
    calculateWidth();
  }, [])

  return (
    <>
      <div className={styles._itemsParent}>
        <div className={styles._leftArrow} onClick={() => nextOrPrevious('left')}>
          <ArrowLeft color='#3D549E' />
        </div>
        <div className={styles._itemsChild}>
          <div className={styles._slider} style={{ width: sliderWidth }}>

            <div className={styles._itemOne} id="1" >
              <div className={styles._cards}>
                {
                  limitArray(0, 2).map(res => {
                    return (
                      <div className={styles._cardsParent}>
                        <Card name={res.title} />
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className={styles._itemOne} id="2" >
              <div className={styles._cards}>
                {
                  limitArray(2, 4).map(res => {
                    return (
                      <div className={styles._cardsParent}>
                        <Card name={res.title} />
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
        <div className={styles._rightArrow} onClick={() => nextOrPrevious('right')}>
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

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getCategories())
)

export default FeaturedSlider;

// import React, { useEffect } from 'react';
// import styles from './styles.module.scss';
// import { useState, useRef } from 'react';
// import { ArrowLeft, ArrowRight } from '../../../public/images/icons';
// import { Card } from '../';
// import { useSelector } from 'react-redux';
// import { getCategories } from '../../store/actions'
// import { wrapper } from '../../store';

// const FeaturedSlider = () => {

//   const [sliderWidth, setSliderWidth] = useState('300%');
//   const second = useRef();
//   const parent = useRef(null);

//   const arrows = (ref) => {
//     document.querySelector(ref).scrollIntoView({
//       behavior: 'smooth',
//     });
//   }

//   const { featured } = useSelector(state => state.featured);

//   // useEffect(() => {

//   //  const width =  featured.length / 2 * 100
//   //  setSliderWidth(`${width}%`);

//   //  console.log(`${width}%`);

//   // }, [])
//   return (
//     <>
//       <div className={styles._itemsParent}>
//         <div className={styles._leftArrow} onClick={() => arrows("#first")}>
//           <ArrowLeft color='#3D549E' />
//         </div>
//         <div className={styles._itemsChild} ref={parent}>
//           <div className={styles._slider} style={{ width: sliderWidth }}>
//             <div className={styles._itemOne} id="first" >
//               <div className={styles._cards}>
//                 <div className={styles._cardsParent}>
//                   <Card />
//                 </div>

//                 <div className={styles._cardsParent}>
//                   <Card />
//                 </div>
//               </div>
//             </div>
//             <div className={styles._itemTwo} ref={second} id="second">
//               <div className={styles._cards}>
//                 <div className={styles._cardsParent}>
//                 </div>

//                 <div className={styles._cardsParent}>
//                 </div>
//               </div>
//             </div>
//             <div className={styles._itemThree} id="tres">item3</div>
//           </div>
//         </div>
//         <div className={styles._rightArrow} onClick={() => arrows("#second")} >
//           <ArrowRight color='#3D549E' />
//         </div>
//       </div>



//     </>
//   )
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getCategories())
// )

// export default FeaturedSlider;

///// STYLES /////////////////////////////

// @import '../../../public/styles/index.scss';

// @mixin arrow($direction) {
//   background-color: $geyser;
//   width: 2rem;
//   height: 2rem;
//   display: flex;
//   border-radius: 5px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   @if $direction == 'left' {
//     margin-right: 2.5rem;
//   }
//   @else {
//     margin-left: 2.5rem;
//   }
// }

// ._itemsParent {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 5rem 0rem;
// }

// ._itemsChild {
//   width: 70%;
//   overflow-y: hidden;
//   scrollbar-width: none;

//   &::-webkit-scrollbar {
//     display: none;
//   }


// }

// ._slider {
//   display: inline-flex;
//   justify-content: center;
//   white-space: nowrap;
// }

// ._itemOne {
//   width: 100%;
//   align-self: center;
//   scroll-behavior: smooth;
// }

// ._itemTwo {
//   width: 100%;
//   margin-top: 500;
//   scroll-behavior: smooth;
// }

// ._itemThree {
//   width: 100%;
//   scroll-behavior: smooth;
// }

// ._arrow {
//   cursor: pointer;
// }

// ._cards {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   // background-color: ;
// }

// ._cardsParent {
//   width: calc(50% - 2rem);
// }

// ._statusText {
//   color: $statusOpen;
//   font-family: $workSans;
//   font-weight: 500;
//   margin-right: 0.4rem;
//   font-size: 0.85rem;
// }

// ._rightText {
//   display: flex;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// ._infoParent {
//   display: flex;
//   margin-top: 1rem;
//   align-items: center;
// }

// ._call {
//   background-color: $geyser;
//   color: $chambray;
//   font-family: $workSans;
//   font-weight: 600;
//   padding: 0.1rem 1.5rem;
//   box-sizing: border-box;
//   border-radius: 35px;
//   font-size: 0.9rem;
// }

// ._location {
//   font-family: $workSans;
//   color: $gray;
//   font-weight: 500;
//   font-size: 0.8rem;
//   margin-left: 1rem;
//   display: flex;
//   align-items: center;

//   & p {
//     margin-right: 0.2rem
//   }
// }

// ._leftArrow {
//   @include arrow('left');
// }

// ._rightArrow {
//   @include arrow('right');
// }
