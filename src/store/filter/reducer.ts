import { CATEGORY, COUNTRY, REGION, TITLE } from "./action-types";


const initialState = {
  country: '',
  category: '',
  region: '',
  title: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRY:
      return { country: payload }
    case CATEGORY:
      return { category: payload }
    case REGION:
      return { region: payload }
    case TITLE:
      return { title: payload }
    default:
      return state;
  }
}