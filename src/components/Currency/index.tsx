import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Currency = ({ children }) => {

    const { currencies } = useSelector(state => state.resource);

    return (
        <div className={styles._currenciesContent}>
            <div className={styles._currenciesCard}>
                {(currencies) ? currencies.map((currency, index) => (
                    <div key={index} className={styles._tooltip}>
                        <img src={currency.currencyData.icon.mediaItemUrl} />
                        <div className={styles._tooltiptext}>{currency.name}</div>
                    </div>
                )) : null}
            </div>
            {children}
        </div>
    )
}

export default Currency;
