import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Loader = () => {
  const [currentSquare, setCurrentSquare] = useState(0);

  useEffect(() => {
    changeClass();
  }, [currentSquare])

  const changeClass = () => {
    setTimeout(() => {
      if (currentSquare <= 2) return setCurrentSquare(currentSquare + 1);
      if(currentSquare == 3) setCurrentSquare(0)
    }, 1000);
  }

  const currentClass = (param) => {
    if(param == currentSquare) return '_square';
    return '_squareOut';
  }

  return (
    <>
      <div className={styles._main}>
        <div>
          <div>
            <img className={styles._logoParent} src='images/logos/logo-loader.svg' width='300px'></img>
          </div>

          <div className={styles._squareParent}>
            <div className={currentClass(0)} />
            <div className={currentClass(1)} />
            <div className={currentClass(2)} />
          </div>
        </div>
      </div>

      <style jsx>{`
      ._square {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #FFF;
        margin: 0.7rem;
        animation: fadeIn 0.6s forwards;
      }

      ._squareOut {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #FFF;
        margin: 0.7rem;
        animation: fadeOut 0.6s forwards;
      }

      @keyframes fadeIn {
        from {
          transform: translateY(0px);
          opacity: 0;
        }

        to {
          transform: translateY(-15px);
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          transform: translateY(-15px);
          opacity: 1;
        }

        to {
          transform: translateY(0px);
          opacity: 0;
        }
      }
    `}</style>
    </>
  )

}

export default Loader;
