import {REGISTER} from './types'
const initialState = [
]
export const userReducer = (state = initialState,action) => {
   switch(action.type){
      case REGISTER :
         return [
            ...state.concat(action.payload)
         ]
      default: return state
   }
}