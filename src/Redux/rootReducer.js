import { combineReducers } from "redux"
import { appReducer } from './appReducer'
import { cardsReducer } from "./cardsReducer"
import { userReducer } from "./userReducer"
export const rootReducer = combineReducers({
   app: appReducer,
   card: cardsReducer,
   user: userReducer
})