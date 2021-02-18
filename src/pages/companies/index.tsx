import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Navbar, Search, Card } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss';
import resources from '../../graphql/querys/resources'

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

async function lol() {
  const allResources = await resources();
  console.log(allResources);

}

const companies: NextPage = () => {

  let title = myFunc.data.post.title
  const options = { weekday: 'long' };
  let date = new Date()
  let day_week = date.toLocaleDateString(undefined, options)
  let day_week_arr = day_week.split(',');
  let day = day_week_arr[0].toLowerCase();
  console.log(lol())

  return (
    <div>
      <main>
        <Navbar />
        <section className={styles._moreInfoContainer}>
          <div className={styles._leftInfo}>
            <Card
              name={myFunc.data.post.title}
              url={myFunc.data.post.commerce.image}
              description={myFunc.data.post.commerce.description}
            />
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
                <p>{node.schedule[day].apertura} / {node.schedule[day].cierre}</p>
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
