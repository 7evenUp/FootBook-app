import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { userReducer } from './user/reducer'
import { userFetchingMiddleware } from './user/middlewares'

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const createAppStore = () => {

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(userFetchingMiddleware),
    )
  )

  return store
}