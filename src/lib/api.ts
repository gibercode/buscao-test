import { fetchService } from '../utils/fetchService'; 

export const getAllPosts = async() => {
  const data = await fetchService(
    `
    query MyQuery {
      posts {
        nodes {
          content(format: RENDERED)
          title
          id
          categories {
            nodes {
              name
            }
          }
          comercio {
            destacado
            metodosDePago
            pais
            sitioWeb
            sucursales {
              deliveryPickup
              direccion
              estado
              horario {
                domingo {
                  abierto
                  apertura
                  cierre
                }
                jueves {
                  abierto
                  apertura
                  cierre
                }
                lunes {
                  abierto
                  apertura
                  cierre
                }
                martes {
                  abierto
                  cierre
                  apertura
                }
                miercoles {
                  apertura
                  abierto
                  cierre
                }
                sabado {
                  abierto
                  apertura
                  cierre
                }
                viernes {
                  abierto
                  apertura
                  cierre
                }
              }
              mapa {
                longitude
                latitude
                streetAddress
              }
              nombre
            }
            tiposDePago
          }
        }
      }
    }    
    `
  );

  return data?.posts;
}

export const getPost = async(slug) => {
  const data = await fetchService(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );

  return data;
}
