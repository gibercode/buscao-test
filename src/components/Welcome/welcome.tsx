import Head from 'next/head';
import styles from './styles.module.scss'
import Link from 'next/link';
import { Navbar } from '..'

const Welcome = () => {

  return (
    <div>


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

      </div>
      <div className={styles._searchContainer}>
        <div className={styles._searchContent}>
          <div className={styles._radioContainer}>
            <input type='radio'></input>
          </div>
          <div className={styles._selectsContainer}>
            <p className={styles._searchTitle}>UBICACIÓN</p>
            <select name='Ubicacion' className={styles._selects} >
              <option>Merida</option>
            </select>
          </div>
          <div className={styles._radioContainer}>
            <input type='radio'></input>
          </div>
          <div className={styles._selectsContainer}>
            <p className={styles._searchTitle}>CATEGORIAS</p>
            <select name='Categorias' className={styles._selects} >
              <option>Caracas</option>
            </select>
          </div>
          <div className={styles._inputContainer}>
            <input placeholder='Que estás buscando' className={styles._input}></input>

          </div>
          <div className={styles._buttonContainer}>
            <button className={styles._blueButtom}>Ir</button>
          </div>
        </div>

      </div>


       </div>
       <div>
        <div className={styles._blackfloor}>
          <div className={styles._coins}>
          <div className={styles._coin}>
              <img className={styles.coinposition8} src='../../images/lying-coins/lying-btc.svg' width='100%' ></img>
            </div>

            <div className={styles._coin}>
              <img className={styles.coinposition3} src='../../images/lying-coins/lying-lite.svg' width='100%'  ></img>
            </div>
            <div className={styles._coin}>
              <img className={styles.coinposition4} src='../../images/lying-coins/lying-ether.svg' width='100%'></img>
            </div>
            <div className={styles._coin}>
              <img className={styles.coinposition} src='../../images/lying-coins/lying-xpt.svg' width='100%'></img>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Welcome;
