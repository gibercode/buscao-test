import Head from 'next/head';
import styles from '../../public/styles/Welcome.module.scss';
import Link from 'next/link';

const Welcome = () => {

  return (
    <div className={styles._main}>
      <div className={styles._container}>
      <div className={styles._centerContainer}>
          <div className={styles._titleContainer}>
            <p className={styles._title}>¿Buscas dónde pagar en criptos?</p>
           </div>
           <div className={styles._descriptionContainer}>
            <p className={styles._description}>Bienvenido a la nueva era financiera, directorio de comercios activos que aceptan criptomonedas</p>
           </div>
      </div>

      </div>

       <div className={styles._blackfloor}>
       {/*  <div className={styles._coins}>
          <img src='../../images/coins/all-coins.svg'></img>
        </div> */}
        <p>lista de monedas</p>
      </div>
    </div>

  )
}

export default Welcome;
