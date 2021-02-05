import styles from './styles.module.scss';
import { World } from '../../../public/images/icons';

const countries = [
  { name: 'Venezuela', value: 'VE' },
  { name: 'Colombia', value: 'CO' },
  { name: 'Argentina', value: 'AR' }
];

const Navbar = () => {
  return (
    <div className={styles._main}>
      <div className={styles._container}>
        <div className={styles._leftSection} >
          <div>
            <img src='images/logos/logo.svg' />
          </div>
          <div className={styles._links}>
            <p className={styles._textLink}> Comercios </p>
            <div className={styles._btnParent}>
              <button className={styles._btnLink} > Cryptobuyer.io </button>
            </div>
          </div>
        </div>

        <div className={styles._rightSection} >
          <div className={styles._rightText}>
            <select name="countries" className={styles._countriesSelect} >
              {
                countries.map((country, index) => {
                  return <option value={country.value} key={index}> {country.name} </option>
                })
              }
            </select>
            <World color='#EFF4F6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
