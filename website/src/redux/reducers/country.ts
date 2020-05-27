/* eslint-disable indent */
import {
  CountryState,
  CountryActions,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_PENDING,
} from '../../types'

export default function product(
  state: CountryState = {
    pending: false,
    countries: [],
    error: '',
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
    case FETCH_COUNTRIES_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.payload.countries,
      }
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

// export const getCountries = (state: CountryState) => state.countries;
// export const getCountriesPending = (state: CountryState) => state.pending;
// export const getCountriesError = (state: CountryState) => state.error;
