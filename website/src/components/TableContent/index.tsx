import React, { useCallback, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'

import Flag from '../Flag'
import { addProduct } from '../../redux/actions'
import TablePaginationActions from '../TablePaginationActions'
import { Product, Country, AppState } from '../../types'
import ThemedLink from '../ThemedLink'
import ThemedButton from '../ThemedButton'

const useStyles = makeStyles({
  tableCell: {
    verticalAlign: 'top',

    borderBottom: '1',
  },
  tableBody: {
    textAlign: 'center',
  },
  unorderedList: {
    listStyle: 'none',
    padding: '0',
  },
})

type TableContentProps = {
  countriesList: Country[]
}
function TableContent({ countriesList }: TableContentProps) {
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(7)
  const classes = useStyles()
  const product = useSelector((state: AppState) => state.product.inCart)
  const emptyRows = useMemo(
    () =>
      rowsPerPage -
      Math.min(rowsPerPage, countriesList.length - page * rowsPerPage),
    [rowsPerPage, countriesList, page]
  )
  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setRowsPerPage(6)
      setPage(0)
    },
    []
  )

  const handleAddProduct = (id: string, name: string, flag: string) => {
    const product: Product = {
      id: id,
      name: name,
      flagUrl: flag,
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  }

  return (
    <>
      <TableBody className={classes.tableBody}>
        {(rowsPerPage > 0
          ? countriesList.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )
          : countriesList
        ).map(row => (
          <TableRow key={row.name}>
            <TableCell className={classes.tableCell}>
              <Flag flagUrl={row.flag} name={row.name} />
            </TableCell>
            <TableCell className={classes.tableCell}>
              <p>
                <ThemedLink
                  url={`/countries/${row.alpha3Code}`}
                  content={row.name}
                />
              </p>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <p>{row.capital}</p>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <ul className={classes.unorderedList}>
                {row.languages.map(l => (
                  <li key={l.name}>{l.name}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <p>{row.population.toLocaleString()}</p>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <ul className={classes.unorderedList}>
                {row.regionalBlocs.map(r => (
                  <li key={r.name}>{r.name}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {product.find(p => p.id === row.alpha3Code) && (
                <Button disabled>Added</Button>
              )}
              {!Boolean(product.find(p => p.id === row.alpha3Code)) && (
                <ThemedButton
                  btnId="addProduct"
                  onClick={() =>
                    handleAddProduct(row.alpha3Code, row.name, row.flag)
                  }
                >
                  Add
                </ThemedButton>
              )}
            </TableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePaginationActions
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            count={countriesList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </>
  )
}

TableContent.displayName = 'TableContent'

export default React.memo(TableContent)
