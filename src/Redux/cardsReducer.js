import {ASYNCPOPULAR, COMPLETE} from './types'
const initialState = [
   {id:1,
   info:{title:'the best anime',subtitle:'subtitle anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:0},
   {id:2,
   info:{title:'the best anime',subtitle:'subtitle anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:48},
   {id:3,
   info:{title:'the best anime',subtitle:'subtitle anime battle',imgs:['index','images',],imgtitle1:'title1',imgtitle2:'title2'},
   complited:66},
]
export const cardsReducer = (state = initialState,action) =>{
   switch(action.type){
      case COMPLETE:
         return {
            state
         }
         case ASYNCPOPULAR:
            return {
               state
            }
      default: return state
   }
}