import {CARDMODAL,REFRESHSELECTED} from './types'
const initialState = [
   {id:1,
   info:{title:'Лучшее аниме',subtitle:'Эпическая схватка самых популярных аниме за 1990-2021 года',imgs:['index','images',],imgtitle1:'Lucky Star',imgtitle2:'The Melancholy of Haruhi Suzumiya'},
   complited:0,
   selected:false},
   {id:2,
   info:{title:'Самое милое животное',subtitle:'Выберете самое милое животное,может вы даже не знали какое ваще',imgs:['cat','panda',],imgtitle1:'Кот',imgtitle2:'Панда'},
   complited:22,
   selected:false},
   {id:3,
   info:{title:'Лучший фильм',subtitle:'Выберете лучший фильм за последние несколько десятков лет',imgs:['avatar','widow',],imgtitle1:'Аватар',imgtitle2:'Вдова'},
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