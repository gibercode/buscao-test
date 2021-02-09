import { GraphQlClient, normalized } from '../../utils';

export const categories = async () => {
  const query = `
    query MyQuery {
      categories {
        nodes {
          name
          slug
        }
      }
    }
  `
  const data: any = await GraphQlClient(query)
  return normalized(data?.categories?.nodes)
}

export const featuredShops = async () => {
  const query = `
  query MyQuery {
    posts {
      nodes {
        title
        commerce {
          subsidiary {
            address
            deliveryPickup
            fieldGroupName
            schedule {
              wednesday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
              tuesday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
              thursday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
              sunday {
                abierto
                apertura
                fieldGroupName
                cierre
              }
              saturday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
              monday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
              friday {
                abierto
                apertura
                cierre
                fieldGroupName
              }
            }
          }
        }
      }
    }
  }
  `
  const data: any = await GraphQlClient(query)
  return normalized(data?.posts?.nodes)
}
