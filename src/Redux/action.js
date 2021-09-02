import {ASYNCPOPULAR,HIDEMODAL,SHOWMODAL} from './types'
export function asyncPop(){
   return {
      type:ASYNCPOPULAR
   }
}
export function showModal(id) {
   return {
      type:SHOWMODAL,
      payload:id
   }
}
export function hideModal(id) {
   return {
      type:HIDEMODAL,
      payload:id
   }
}