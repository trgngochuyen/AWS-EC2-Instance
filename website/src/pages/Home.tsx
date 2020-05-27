import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ResultTable from '../components/ResultTable'
import NavBar from '../components/NavBar'
import useFetch from '../hooks/useFetch'
import { SingleHeader } from '../types'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100vh',
  },
})

function Home() {
  // React states
  const [sortedAsc, setSortedAsc] = useState(true)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<SingleHeader>('name')

  // API Data fetched by custom hook
  const filteredCountries = useFetch({ sortedAsc, sortBy, search })

  // Style
  const classes = useStyles()

  // useCallback prevents TableHeader from re-rendering when search input changes
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  // useCallback prevents SearchBar from re-rendering when header is clicked
  const handleColumnChange = useCallback(
    (e) => {
      if (sortBy === e.target.id) {
        setSortedAsc(!sortedAsc)
      } else {
        setSortBy(e.target.id)
        setSortedAsc(true)
      }
    },
    [sortBy, sortedAsc]
  )

  return (
    <div className={classes.container}>
      <NavBar search={search} handleChange={handleSearch} />
      <ResultTable
        countries={filteredCountries}
        sortedAsc={sortedAsc}
        sortBy={sortBy}
        handleClick={handleColumnChange}
      />
    </div>
  )
}

Home.displayName = 'Home'

export default React.memo(Home)
