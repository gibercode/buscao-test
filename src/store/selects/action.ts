import { GET_SELECT } from './action_types'
import { selects } from '../../graphql/querys'
import { actionObject } from '../../utils'

export const getSelect = () => async dispatch => {
  const result = await selects()
  console.log(result);
  
  dispatch(actionObject(GET_SELECT, result))
}
