import { combineReducers } from "redux";
import {appReducer} from './appReducer'
import { cardsReducer } from "./cardsReducer";
export const rootReducer = combineReducers({
   app: appReducer,
   card:cardsReducer,
})