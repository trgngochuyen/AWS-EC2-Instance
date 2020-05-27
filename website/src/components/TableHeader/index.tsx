import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import { SingleHeader } from '../../types'
import { header } from '../../const'

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHead: {},
  tableCell: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
})

type HeaderProps = {
  handleClick(event: React.MouseEvent<HTMLTableDataCellElement>): void
  sortedAsc: boolean
  sortBy: SingleHeader
}

function TableHeader({ handleClick, sortedAsc, sortBy }: HeaderProps) {
  const classes = useStyles()
  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        {header.map(s => (
          <TableCell
            className={classes.tableCell}
            key={s}
            id={s}
            sortDirection={sortBy === s && (sortedAsc ? 'asc' : 'desc')}
          >
            <TableSortLabel
              id={s}
              active={sortBy === s}
              direction={sortBy === s ? (sortedAsc ? 'asc' : 'desc') : 'asc'}
              onClick={handleClick}
            >
              {s.toUpperCase()}
              {sortBy === s ? (
                <span className={classes.visuallyHidden}>
                  {sortedAsc ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}

TableHeader.displayName = 'TableHeader'

export default React.memo(TableHeader)
