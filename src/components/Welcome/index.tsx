import styles from './styles.module.scss'
import Search from '../Search'

const Welcome = () => {
  return (
    <div>
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
        <div className={styles._searchBuild}>
          <div>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles._blackfloor}>

        </div>
      </div>
    </div>
  )
}

export default Welcome;
