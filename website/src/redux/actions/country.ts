import { Dispatch } from 'redux'

import {
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  Country,
} from '../../types'

export function fetchCountriesPending() {
  return {
    type: FETCH_COUNTRIES_PENDING,
  }
}

export function fetchCountriesSuccess(countries: Country[]) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: {
      countries: countries,
    },
  }
}

export function fetchCountriesError(error: Error) {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: {
      pending: false,
      error: error,
    },
  }
}

//Async action processed by redux-thunk middleware
export function fetchCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountriesPending())
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((resp) => resp.json())
      .then((myJson) => {
        dispatch(fetchCountriesSuccess(myJson))
      })
      .catch((error) => {
        dispatch(fetchCountriesError(error))
      })
  }
}
