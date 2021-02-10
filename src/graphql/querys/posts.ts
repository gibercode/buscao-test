import { GraphQlClient, normalizedArray } from '../../utils';

export const AllPosts = async () => {
    const query = `query MyQuery {
      posts {
        nodes {
          id
          title
          categories {
            nodes {
              id
              name
              slug
            }
          }
          commerce {
            country {
              id
              name
              slug
            }
            outstanding
            paymentmethods
            paymenttypes
            subsidiary {
              address
              deliveryPickup
              name
              map {
                latitude
                longitude
                streetAddress
              }
              schedule {
                friday {
                  abierto
                  apertura
                  cierre
                }
                monday {
                  abierto
                  apertura
                  cierre
                }
                saturday {
                  abierto
                  apertura
                  cierre
                }
                sunday {
                  abierto
                  apertura
                  cierre
                }
                thursday {
                  abierto
                  apertura
                  cierre
                }
                tuesday {
                  abierto
                  apertura
                  cierre
                }
                wednesday {
                  abierto
                  apertura
                  cierre
                }
              }
              state {
                id
                name
                slug
              }
            }
            website
          }
        }
      }
    }
    `
    const data: any = await GraphQlClient(query)
    return normalizedArray(data?.posts?.nodes)
}
