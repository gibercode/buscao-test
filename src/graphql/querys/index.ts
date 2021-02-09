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
