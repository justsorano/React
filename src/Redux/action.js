import {HIDEMODAL,SHOWMODAL,CARDMODAL,REFRESHSELECTED} from './types'

export function showModal() {
   return {
      type:SHOWMODAL
   }
}
export function getCardId(id){
   return {
      type:CARDMODAL,
      payload:id
   }
}
export function hideModal() {
   return {
      type:HIDEMODAL
   }
}
export function Refresh(){
   return {
      type:REFRESHSELECTED
   }
}