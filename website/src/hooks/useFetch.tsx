import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, sortBy as sortFunc } from 'lodash'

import { AppState, Country, SingleHeader } from '../types'
import { fetchCountries } from '../redux/actions'

type UseFetchProps = {
  sortedAsc: boolean
  sortBy: SingleHeader
  search: string
}

export default function useFetch({ sortedAsc, sortBy, search }: UseFetchProps) {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.countriesList)
  useEffect(() => {
    if (isEmpty(data.countries)) {
      dispatch(fetchCountries())
    }
  }, [dispatch, data])

  useEffect(() => {
    // Filtering
    let filteredData = data.countries.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    // Sorting
    if (sortBy && sortedAsc) {
      setFilteredCountries(sortFunc(filteredData, sortBy))
    } else if (sortBy && !sortedAsc) {
      setFilteredCountries(sortFunc(filteredData, sortBy).reverse())
    }
  }, [sortedAsc, sortBy, search, data])
  return filteredCountries
}
