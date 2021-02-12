import { GraphQlClient, normalizedArray } from '../../utils';
import categoryQuery from './categories'
import countriesQuery from './countries'
import postsQuery from './posts'

const resources = async () => {
  const query = `
    query Resources {
      ${categoryQuery}
      ${countriesQuery}
      ${postsQuery}
    }
  `

  const data: any = await GraphQlClient(query)

  const resources = {
    categories:  normalizedArray(data?.categories?.nodes),
    countries: normalizedArray(data?.countries?.nodes),
    posts: normalizedArray(data?.posts?.nodes)
  }

  return resources
}

export default resources
