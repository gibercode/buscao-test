import { useSelector, useDispatch } from 'react-redux'
import { changeResources } from '../../store/actions'
import { World } from '../../../public/images/icons'
import styles from './styles.module.scss'

const Navbar = () => {
  const dispatch = useDispatch()
  const resource = useSelector(state => state.resource)
  const { currentLocation, countries } = resource

  const changeCountry = (event) => dispatch(changeResources(event.target.value))

  return (
    <div className={styles._main}>
      <div className={styles._container}>
        <div className={styles._leftSection} >
          <div className={styles._logo}>
            <img src='images/logos/logo.svg' />
          </div>
          <div className={styles._links}>
            <p className={styles._textLink}> Comercios </p>
            <div className={styles._btnParent}>
              <a href='https://cryptobuyer.io' target='_blank'>
              <button className={styles._btnLink} > Cryptobuyer.io </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles._rightSection} >
          <div className={styles._rightText}>
            <select name="countries" className={styles._countriesSelect} defaultValue={currentLocation} onChange={changeCountry}>
              {
                countries.map((country, index) => {
                  return <option value={country.slug} key={index}>{country.name}</option>
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

export default Navbar
