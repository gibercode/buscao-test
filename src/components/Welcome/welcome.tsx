import Head from 'next/head';
import styles from './styles.module.scss'
import Link from 'next/link';
import { Navbar, Search } from '..'

const Welcome = () => {

  return (
    <div >
      <div className={styles._main}>
        <Navbar />
        <div className={styles._container}>
          <div className={styles._centerContainer}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>¿Buscas dónde pagar en criptos?</p>
            </div>
            <div className={styles._descriptionContainer}>
              <p className={styles._description}>Bienvenido a la nueva era financiera, directorio de comercios activos que aceptan criptomonedas</p>
            </div>
          </div>
          <div className={styles._searchBuild} >
            <Search />
          </div>
        </div>

      </div>

      <div>
        <div className={styles._blackfloor}>
          <div className={styles._coins}>
            <div className={styles._coin1}>
              <img className={styles.coinposition1} src='../../images/lying-coins/lying-btc.svg' width='100%' ></img>
            </div>
            <div className={styles._coin2}>
              <img className={styles.coinposition2} src='../../images/lying-coins/lying-lite.svg' width='100%'  ></img>
            </div>
            <div className={styles._coin3}>
              <img className={styles.coinposition3} src='../../images/lying-coins/lying-ether.svg' width='100%'></img>
            </div>
            <div className={styles._coin4}>
              <img className={styles.coinposition4} src='../../images/lying-coins/lying-xpt.svg' width='100%'></img>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Welcome;
