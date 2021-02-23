import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Navbar, Search, Card, Currency } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { paginate } from '../../utils';
import Pagination from '../../components/Pagination';

const findDay = () => {
  const options = { weekday: 'long' };
  let date = new Date()
  let day_week = date.toLocaleDateString(undefined, options)
  let day_week_arr = day_week.split(',');
  let day = day_week_arr[0].toLowerCase();
  return day;
}

const perPage = 12

const commerce: NextPage = () => {

  const selectedCommerce = useSelector(state => state.selectedCommerce)
  const id = selectedCommerce.id
  const resource = useSelector(state => state.post)
  const day = findDay()

  const [company, setCompany] = useState<any>();
  const [subsidiary, setSubsidiary] = useState<any>();
  const [focus, setFocus] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    var result: any = resource.filterPosts.find(element => element['id'] == id);
    setCompany(result);
    var first_subsidiary = result? result.commerce.subsidiary : '';
    setSubsidiary(first_subsidiary[0]);
  }, []);

  const changeCompany = (node) => {
    setSubsidiary(node);
    setFocus(false);
  }

  return (
    <div>
      <main>
        {/* <Navbar /> */}
        <section className={styles._moreInfoContainer}>
          <div className={styles._leftInfo}>
            <div className={styles._cardContainer}>
              <Card
                name={company ? company['title'] : []}
                url={company ? company['commerce'].image : []}
                description={company ? company['commerce'].description : []}
                phone={['LLAMAR', '_infoParentBlack']}
                longAddr={subsidiary ? subsidiary.address : '-' }
              />
            </div>
            <section style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-around" }}>
                <Currency key={company ? company.id : []} currenciesData={company ? { currencies: company.commerce.paymentmethods } : []} />
            </section>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12329023.712065306!2d-91.10433262499994!3d41.0249156380248!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1613662529659!5m2!1ses!2sve">
            </iframe>
          </div>
        </section>

        <section className={styles._searchContainer}>
          <Search />
        </section>

        <section className={styles._cardsContainer}>
          <div className={styles._cards}>
            {
            company ?
              paginate(company.commerce.subsidiary, page, perPage).map((card, index) => {
                return (
                  <button autoFocus={(index==0) ? focus : false} className={styles._cardContent} id={index.toString()} key={index} onClick={() => changeCompany(card)}>
                  <p className={styles._text}> {card.name}</p>
                  <p>{card.phoneNumber}</p>
                  {
                    card.schedule[day].apertura ?
                    <p>{card.schedule[day].apertura} / {card.schedule[day].cierre}</p> :
                    <p> - </p>
                  }
                </button>
                )
              }
            ) : ''
            }
          </div>
          <div className={styles._paginationContainer}>
            <Pagination color='white' activeColor='white' currentPage={page} items={company ? company.commerce.subsidiary : [1]} perPage={perPage} changePage={setPage}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default commerce
