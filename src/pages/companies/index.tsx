import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Navbar, Search, Card, Currency } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

import { resources } from '../../graphql/querys'

const myFunc =
{
  "data": {
    "post": {
      "id": "cG9zdDoyNjM=",
      "uri": "/?p=263",
      "title": "Excelsior Gama",
      "commerce": {
        "website": null,
        "image": "http://admin-buscao.thecodeworkers.com/wp-content/uploads/2021/02/logo-excelsior-gama-245x107-1.png",
        "description": "Supermercado, Alimentos, Charcutería...",
        "outstanding": true,
        "subsidiary": [
          {
            "address": "Caracas",
            "deliveryPickup": [
              "delivery",
              "pickup"
            ],
            "name": "Caracas",
            "phoneNumber": "+58 426 8492092",
            "schedule": {
              "friday": {
                "abierto": true,
                "apertura": "09:00:00",
                "cierre": "16:00:00"
              },
              "monday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              },
              "saturday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              },
              "sunday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              },
              "thursday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              },
              "tuesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              },
              "wednesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "6:00 pm"
              }
            }
          },
          {
            "address": "anzoategui",
            "deliveryPickup": [
              "delivery",
              "pickup"
            ],
            "name": "anzoategui",
            "phoneNumber": "+58 424 6822723",
            "schedule": {
              "friday": {
                "abierto": true,
                "apertura": "10:00:00",
                "cierre": "18:00:00"
              },
              "monday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              },
              "saturday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              },
              "sunday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              },
              "thursday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              },
              "tuesday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              },
              "wednesday": {
                "abierto": true,
                "apertura": "10:00 am",
                "cierre": "6:00 pm"
              }
            }
          },
          {
            "address": "Las Mercedes, calle 10, frente a la plaza",
            "deliveryPickup": [
              "pickup"
            ],
            "name": "Las Mercedes",
            "phoneNumber": "+58 424 12312312",
            "schedule": {
              "friday": {
                "abierto": true,
                "apertura": "09:00:00",
                "cierre": "09:00:00"
              },
              "monday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "saturday": {
                "abierto": null,
                "apertura": null,
                "cierre": null
              },
              "sunday": {
                "abierto": null,
                "apertura": null,
                "cierre": null
              },
              "thursday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "tuesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "wednesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              }
            }
          },
          {
            "address": "Los Cortijos, calle 10, frente a la plaza",
            "deliveryPickup": [
              "pickup"
            ],
            "name": "Los Cortijos",
            "phoneNumber": "+58 424 12312312",
            "schedule": {
              "friday": {
                "abierto": true,
                "apertura": "09:00:00",
                "cierre": "09:00:00"
              },
              "monday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "saturday": {
                "abierto": null,
                "apertura": null,
                "cierre": null
              },
              "sunday": {
                "abierto": null,
                "apertura": null,
                "cierre": null
              },
              "thursday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "tuesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              },
              "wednesday": {
                "abierto": true,
                "apertura": "9:00 am",
                "cierre": "9:00 pm"
              }
            }
          }
        ]
      },
      "currencies": {
        "nodes": []
      }
    }
  }
}

interface Props {
  id?: string;
}

// async function lol() {
//   const allResources = await resources()
//   console.log(allResources);
// }

const findDay = () => {
  const options = { weekday: 'long' };
  let date = new Date()
  let day_week = date.toLocaleDateString(undefined, options)
  let day_week_arr = day_week.split(',');
  let day = day_week_arr[0].toLowerCase();
  return day;
}

const companies: NextPage<Props> = ({id = 'cG9zdDoyNjM='}) => {

  const { filterPosts } = useSelector(state => state.post)

  const resource = useSelector(state => state.post)
  const day = findDay()
  const title = myFunc.data.post.title;

  const [company, setCompany] = useState<any>();

  useEffect(() => {
    var result: any = resource.filterPosts.find(element => element['id'] == 'cG9zdDoyNjM=')
    console.log(result)
    setCompany(result)
  }, [])

  return (
    <div>
      <main>
        <Navbar />
        <section className={styles._moreInfoContainer}>
          <div className={styles._leftInfo}>
            <Card
              name={company ? company['title'] : []}
              url={company ? company['commerce'].image : []}
              description={company ? company['commerce'].description : []}
            />
            {/* <Currency currenciesData={ {currencies: company['commerce'].paymentmethods} } /> */}
            <section style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-around" }}>
              {company.map((node, index) => (
                <Currency key={index} currenciesData={{ currencies: node.commerce.paymentmethods }}>
                </Currency>
              ))}
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
            {myFunc.data.post.commerce.subsidiary.map(node => (
              <div className={styles._cardContent} key={node.name}>
                <p className={styles._text}> {title} - {node.name}</p>
                <p>{node.phoneNumber}</p>
                {
                  node.schedule[day] ?
                  <p>{node.schedule[day].apertura} / {node.schedule[day].cierre}</p> : <p></p>
                }
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default companies
