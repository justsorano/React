import {CARDMODAL} from './types'
const initialState = [
   {id:1,
   info:{title:'the best anime',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:0},
   {id:2,
   info:{title:'the best anime',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:22},
   {id:3,
   info:{title:'the best anime',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:50},
]
export const cardsReducer = (state = initialState,action) =>{
   switch(action.type){
      case CARDMODAL:
         return state.filter(i => i.id === action.payload)
      default: return state
   }
}