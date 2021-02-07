import { GET_CATEGORIES } from './action_types'
import { categories } from '../../graphql/querys'

export const getCategories = () => async dispatch => {
  const result = await categories()

  dispatch({
    type: GET_CATEGORIES,
    payload: { categories: result }
  })
}
