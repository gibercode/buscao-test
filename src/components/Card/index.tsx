import { FC } from 'react';
import styles from './styles.module.scss';
import { Location, Clock } from '../../../public/images/icons';
import { CardProps } from './type';

const Card: FC<CardProps> =  ({ name, address, url, description, phone, status }) => {
  return (
    <div>
      <div className={styles._card}>
        <div className={styles._imageParent}>
          <img src={url} width='40%' height="100%"></img>
        </div>

        <div className={styles._minicard}>
          <div>
            <span className={styles._title}> { name || 'Excelcior Gama' } </span><br />
            <span className={styles._text}> { description || 'Supermercados, Alimentos, Charcuteria' } </span>
          </div>

          <div className={styles._rightText}>
            <p className={status ? styles._statusText : styles._closedText}> { status ? 'ABIERTO' : 'CERRADO '} </p>
            <Clock color={status ? '#4A973C' : '#EC3333'} />
          </div>
          {
            open ?
            <div className={styles._rightText}>
              <p className={styles._statusText} >ABIERTO</p>
              <Clock color='#4A973C' />
            </div> :
            <div></div>
          }
        </div>
      </div>

      {/* <div className={styles._infoParent}>
        <div className={styles._call}>
          <p> { phone || '+58 424 1872382' } </p>
        </div>

        <div className={styles._location}>
          <p> { address || 'Caracas' } </p>
          <Location color='#828282' />
        </div>
      </div> */}
    </div>
  )
};

export default Card;
