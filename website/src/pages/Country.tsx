import React, { useContext, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import HomeIcon from '@material-ui/icons/Home'
import ThemeContext from '../contextAPI'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import _ from 'lodash'

import ThemedChip from '../components/ThemedChip'
import MyAppBar from '../components/MyAppBar'
import { AppState } from '../types'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    maxHeight: '100vh',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  container: {
    margin: '90px auto',
    maxHeight: '100vh',
  },
  upperCard: {
    minHeight: '45vh',
    width: '100%',
    marginTop: '10px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: '100%',
    height: 'auto',
    paddingTop: '56.25%', // 16:9
  },
  upperPaper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  lowerPaper: {
    minHeight: '10vh',
  },
  lowerCard: {},
}))

function Country() {
  const classes = useStyles()
  const { theme } = useContext(ThemeContext)
  const { alpha3Code } = useParams()
  const history = useHistory()
  const country = useSelector((state: AppState) =>
    state.countriesList.countries.find(c => c.alpha3Code === alpha3Code)
  )
  const countries = useSelector((state: AppState) =>
    state.countriesList.countries.map(c => {
      return {
        flag: c.flag,
        name: c.name,
        alpha3Code: c.alpha3Code,
      }
    })
  )

  const handleGoBack = useCallback(() => history.goBack(), [history])

  if (!country) {
    return (
      <>
        <MyAppBar>
          <Button
            style={{ backgroundColor: theme.background, color: theme.color }}
            onClick={handleGoBack}
          >
            <HomeIcon /> GO BACK
          </Button>
        </MyAppBar>
        <div>Country not found</div>
      </>
    )
  }
  return (
    <div className={classes.root}>
      <MyAppBar>
        <Button
          style={{ backgroundColor: theme.background, color: theme.color }}
          onClick={handleGoBack}
        >
          <HomeIcon /> GO BACK
        </Button>
      </MyAppBar>
      <Container className={classes.container}>
        <Grid container spacing={6}>
          <Grid item xs>
            <Paper className={classes.upperPaper}>
              <Card className={classes.upperCard}>
                <CardHeader subheader="Capital" title={country.capital} />
                <CardHeader
                  subheader="Native Name"
                  title={country.nativeName}
                />
                <CardHeader subheader="Region" title={country.region} />
                <CardHeader subheader="Sub Region" title={country.subregion} />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.upperPaper}>
              <Card className={classes.upperCard}>
                <CardHeader title={country.name} />
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                  title={country.name}
                />
                <CardHeader
                  subheader="Area"
                  title={`${country.area.toLocaleString()} square kilometers`}
                />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.upperPaper}>
              <Card className={classes.upperCard}>
                <CardHeader
                  subheader="Population"
                  title={country.population.toLocaleString()}
                />
                <div>
                  {country.currencies.map(c => {
                    return (
                      <Chip
                        icon={<Avatar>{c.symbol}</Avatar>}
                        label={c.name}
                        color="secondary"
                      />
                    )
                  })}
                </div>
                <CardHeader
                  subheader="Currency Code"
                  title={_.first(country.currencies.map(c => c.code))}
                />
                <CardHeader
                  subheader="Currency Name"
                  title={_.first(country.currencies.map(c => c.name))}
                />
                <CardHeader
                  subheader="Currency Symbol"
                  title={_.first(country.currencies.map(c => c.symbol))}
                />
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid spacing={3}>
          <Grid item xs>
            <Paper className={classes.lowerPaper}>
              <Card className={classes.lowerCard}>
                <CardContent>
                  <Typography className={classes.pos} variant="h6">
                    Languages
                  </Typography>
                  <List>
                    {country.languages.map(l => {
                      return <ThemedChip label={l.name} />
                    })}
                  </List>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid spacing={3}>
          <Grid item xs>
            <Paper className={classes.lowerPaper}>
              <Card className={classes.lowerCard}>
                <CardContent>
                  <Typography className={classes.pos} variant="h6">
                    Neighbors
                  </Typography>
                  <List>
                    {!country.borders && (
                      <Typography variant="subtitle1">
                        This country has no neighbors.
                      </Typography>
                    )}
                    {country.borders
                      .map(code =>
                        countries.find(country => country.alpha3Code === code)
                      )
                      .map(country => (
                        <Chip
                          avatar={
                            <Avatar alt={country?.name} src={country?.flag} />
                          }
                          label={country?.name}
                          variant="outlined"
                        />
                      ))}
                  </List>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Country.displayName = 'Country'

export default React.memo(Country)
