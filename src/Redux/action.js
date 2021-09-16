import {HIDEMODAL,SHOWMODAL,CARDMODAL,REFRESHSELECTED, REGISTER} from './types'

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
export function Register(user){
   return {
      type:REGISTER,
      payload:user
   }
}