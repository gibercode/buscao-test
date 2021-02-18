import { GraphQlClient, normalized, normalizedArray } from '../../utils';
import categoryQuery from './categories'
import countriesQuery from './countries'
import postsQuery from './posts'
import homePageQuery from './homePage'

const resources = async () => {
  // ${postsQuery}
  const query = `
    query Resources {
      ${categoryQuery}
      ${countriesQuery}

      ${homePageQuery}
    }
  `

  const data: any = await GraphQlClient(query)

  const resources = {
    categories:  normalizedArray(data?.categories?.nodes),
    countries: normalizedArray(data?.countries?.nodes),
    posts: normalizedArray(data?.posts?.nodes),
    homePage: normalized(data?.page)
  }

  return resources
}

export default resources
