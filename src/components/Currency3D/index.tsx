import styles from './styles.module.scss'

const Currency3D = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className={styles._coins}>
      <div className={styles._coin1}>
        <img className={styles.coinposition1} src='../../images/lying-coins/lying-btc.svg' width='100%'></img>
      </div>
      <div className={styles._coin2}>
        <img className={styles.coinposition2} src='../../images/lying-coins/lying-lite.svg' width='100%'></img>
      </div>
      <div className={styles._coin3}>
        <img className={styles.coinposition3} src='../../images/lying-coins/lying-ether.svg' width='100%'></img>
      </div>
      <div className={styles._coin4}>
        <img className={styles.coinposition4} src='../../images/lying-coins/lying-xpt.svg' width='100%'></img>
      </div>
    </div>
  </div>
)

export default Currency3D
