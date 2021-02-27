import { SHOW_LOADER } from './action-types';

export const setLoader = (show: boolean) => {
  return {
    type: SHOW_LOADER,
    payload: show
  }
}
