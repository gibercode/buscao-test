import { GraphQlClient, normalizedArray } from '../../utils';

const resources = async () => {
  const query = `
    query MyQuery {
      categories {
        nodes {
          name
          slug
        }
      }
      countries {
        nodes {
          name
          slug
          statesField {
            states {
              name
              slug
            }
          }
        }
      }
    }
  `

  const data: any = await GraphQlClient(query)

  const resources = {
    categories:  normalizedArray(data?.categories?.nodes),
    countries: normalizedArray(data?.countries?.nodes)
  }

  return resources
}

export default resources
