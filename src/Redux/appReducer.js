import {SHOWMODAL,HIDEMODAL} from './types'
const initialState = {
   alert:null,
   modal:false
}
export const appReducer = (state = initialState,action) => {
   switch(action.type){
      case SHOWMODAL:
         return {
            ...state,modal:true
         }
         case HIDEMODAL:
            return {
               ...state,modal:false
            }
      default: return state
   }
}