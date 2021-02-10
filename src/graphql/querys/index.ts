import { GraphQlClient, normalized } from '../../utils';

export const selects = async () => {
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

  const selects = {
    categories:  normalized(data?.categories?.nodes),
    countries: normalized(data?.countries?.nodes),
    states: normalized(data?.countries?.nodes[0]?.statesField?.states)
  }

  return selects
}