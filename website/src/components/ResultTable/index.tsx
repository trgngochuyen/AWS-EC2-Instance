import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'

import TableHeader from '../TableHeader'
import TableContent from '../TableContent'
import { Country, SingleHeader } from '../../types'

type ResultTableProps = {
  countries: Country[]
  handleClick(event: React.MouseEvent<HTMLTableDataCellElement>): void
  sortedAsc: boolean
  sortBy: SingleHeader
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '70px',
  },
  table: {
    tableLayout: 'auto',
    minHeight: '85vh',
    maxWidth: '100vw',
  },
})

const ResultTable = ({
  countries,
  handleClick,
  sortedAsc,
  sortBy,
}: ResultTableProps) => {
  const classes = useStyles()
  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="custome pagination table">
        <TableHeader
          sortedAsc={sortedAsc}
          handleClick={handleClick}
          sortBy={sortBy}
        />
        <TableContent countriesList={countries} />
      </Table>
    </TableContainer>
  )
}

ResultTable.displayName = 'ResultTable'

export default ResultTable
