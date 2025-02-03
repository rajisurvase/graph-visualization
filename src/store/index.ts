import { createStore, combineReducers } from "redux"
import graphReducer from "./graphReducer"

const rootReducer = combineReducers({
  graph: graphReducer
})

const store = createStore(rootReducer)

export default store

