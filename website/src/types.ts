// Country type
export type Language = {
  name: string
}
export type RegionalBloc = {
  name: string
}
export type Currency = {
  code: string
  name: string
  symbol: string
}
export type Country = {
  flag: string
  name: string
  languages: Language[]
  population: number
  regionalBlocs: RegionalBloc[]
  alpha3Code: string
  capital: string
  currencies: Currency[]
  region: string
  subregion: string
  nativeName: string
  borders: string[]
  area: number
}
export type NeighborCountry = {
  flag: string
  name: string
  alpha3Code: string
}
export type HeaderTitle = SingleHeader[]
export type SingleHeader = string

// Theme Color type
export type Color = string
export type ThemeType = {
  name: string
  color: Color
  background: Color
  buttonColor: Color
  disabledBtnBackground: Color
  disabledBtnColor: Color
}

// Action types
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_A_COUNTRY = 'FETCH_A_COUNTRY'

export const FETCH_COUNTRIES_PENDING = 'FETCH_COUNTRIES_PENDING'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}
// Search
export type Search = string
export const SET_SEARCH = 'SET_SEARCH'
export type SearchAction = {
  type: typeof SET_SEARCH
  payload: {
    search: Search
  }
}

// Sorted Ascending
export type SortedAsc = boolean
export const SET_SORTEDASC = 'SET_SORTEDASC'
export type SetSortedAscAction = {
  type: typeof SET_SORTEDASC
  payload: {
    sortedAsc: SortedAsc
  }
}
export enum SortedAscType {
  Asc = 'Ascending',
  Desc = 'Descending',
}
export type SortedAscState = {
  state: {
    [key in SortedAscType]?: boolean
  }
}
// Sort by column name
export type SortBy = SingleHeader
export const SET_SORTBY = 'SET_SORTBY'
export type SetSortByAction = {
  type: typeof SET_SORTBY
  payload: {
    sortBy: SortBy
  }
}

// A product
export type Product = {
  id: string
  name: string
  flagUrl: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type FetchACountryAction = {
  type: typeof FETCH_A_COUNTRY
  payload: {
    country: Country
  }
}

export type FetchCountriesPending = {
  type: typeof FETCH_COUNTRIES_PENDING
  payload: {
    pending: boolean
  }
}
export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: {
    countries: Country[]
  }
}
export type FetchCountriesError = {
  type: typeof FETCH_COUNTRIES_ERROR
  payload: {
    error: string
  }
}

export type UiActions = ToggleDialogAction

// Use this ProductActions union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

// Use this CountryActions union in reducer
export type CountryActions =
  | FetchACountryAction
  | FetchCountriesAction
  | FetchCountriesError
  | FetchCountriesPending
  | FetchCountriesSuccess
// | FetchCountries

export type CountryState = {
  pending: boolean
  countries: Country[]
  error: string
}
export type ProductState = {
  inCart: Product[]
}
export type SearchState = {
  search: Search
}
// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  countriesList: CountryState
  drawer: DrawerState
  product: ProductState
  ui: UiState
}

// Toggle Drawer
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export type DrawerState = {
  drawerOpen: boolean
}
export type ToggleDrawerAction = {
  type: typeof TOGGLE_DRAWER
  payload: {
    drawerOpen: boolean
  }
}
