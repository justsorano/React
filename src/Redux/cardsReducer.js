import {CARDMODAL,REFRESHSELECTED} from './types'
const initialState = [
   {id:1,
   info:{title:'the best anime1',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:0,
   selected:false},
   {id:2,
   info:{title:'the best anime2',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:22,
   selected:false},
   {id:3,
   info:{title:'the best anime3',subtitle:'anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:50,
   selected:false},
]
export const cardsReducer = (state = initialState,action) =>{
   switch(action.type){
      case CARDMODAL:
         return state.map(card =>{
               if(card.id === action.payload){
                  card.selected = true
               }
               return card
            })
         case REFRESHSELECTED:
            return state.map(card =>{
               if(card.selected === true){
                  card.selected = false
               }
               return card
            })
      default: return state
   }
}