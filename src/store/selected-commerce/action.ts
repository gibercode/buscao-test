import { SELECTED_COMMERCE } from './action-types';

export const setSelectedCommerce = (id: string) => {
  return {
    type: SELECTED_COMMERCE,
    payload: id
  }
}
