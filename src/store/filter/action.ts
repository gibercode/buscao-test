import { COUNTRY, CATEGORY, REGION, TITLE } from './action-types';

export const countryFilter = param => ({ type: COUNTRY, payload: param })
export const categoryFilter = param => ({ type: CATEGORY, payload: param })
export const regionFilter = param => ({ type: REGION, payload: param })
export const titleFilter = param => ({ type: TITLE, payload: param })