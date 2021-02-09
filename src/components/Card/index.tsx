import styles from './styles.module.scss';
import { Location, Clock } from '../../../public/images/icons';

const Card = ({name}: any) => {
  return (
    <div>
      <div className={styles._card}>

        <div className={styles._imageParent}>
          <img src='images/logos/excelsior-gama-logo.svg' width='40%'></img>
        </div>

        <div className={styles._minicard}>
          <div>
            <span className={styles._title}> {name} </span><br />
            <span className={styles._text}>Supermercados, Alimentos, Charcuteria </span>
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
    </div>
  )
};

export default Card;
