import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Navbar, Search, Card } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss'

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

const companies: NextPage = () => {

  const { filterPosts } = useSelector(state => state.post)
  let title = myFunc.data.post.title

  const options = { weekday: 'long' };
  let date = new Date()
  let day_week = date.toLocaleDateString(undefined, options)
  let day_week_arr = day_week.split(',');
  let day = day_week_arr[0].toLowerCase();

  return (
    <div className='blogSpot'>
      <main>
        <Navbar />
        <section style={{padding: '3% 5%', margin: '0 2%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '50%'}}>
            <div>
              <Card />
              <img src={myFunc.data.post.commerce.image} />
            </div>
          </div>
          <div>MAPA</div>
        </section>

        <section>
          <Search />
        </section>

        <section style={{backgroundColor: '#353535', padding: '5% 5% 0 5%'}}>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {myFunc.data.post.commerce.subsidiary.map(node => (
              <div style={{backgroundColor: '#EBEBEB', cursor: 'pointer', margin: '0 2% 3%', height: 'max-content', padding: '1.5% 6% 1.5% 1.5%', borderRadius: '15px', width: '29%'}} key={node.name}>
                <p style={{textTransform: 'capitalize'}}> {title} - {node.name}</p>
                <p>{node.phoneNumber}</p>
                {
                  <p>{node.schedule[day].apertura} / {node.schedule[day].cierre}</p>
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
