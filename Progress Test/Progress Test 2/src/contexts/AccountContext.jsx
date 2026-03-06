import { createContext, useReducer, useContext } from 'react'

const AccountContext = createContext()

const initialState = {
  accounts: [],
  currentUser: JSON.parse(localStorage.getItem('loggedUser')) || null,
  loading: false,
  error: null,
}

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return { ...state, accounts: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: true }
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'LOGIN':
      localStorage.setItem('loggedUser', JSON.stringify(action.payload))
      return { ...state, currentUser: action.payload }
    case 'LOGOUT':
      localStorage.removeItem('loggedUser')
      return { ...state, currentUser: null }
    case 'UPDATE_ACCOUNT':
      const updatedState = {
        ...state,
        accounts: state.accounts.map((acc) =>
          acc.id === action.payload.id ? action.payload : acc,
        ),
      }
      // If the currently logged-in user is updated, sync their info too
      if (state.currentUser && state.currentUser.id === action.payload.id) {
        localStorage.setItem('loggedUser', JSON.stringify(action.payload))
        updatedState.currentUser = action.payload
      }
      return updatedState
    default:
      return state
  }
}

export const AccountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState)

  return (
    <AccountContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider')
  }
  return context
}

export default AccountContext
