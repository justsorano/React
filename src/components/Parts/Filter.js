import React,{useState} from 'react'
export const Filter = () =>{
   const [styles,setStyles] = useState(['filter__column'])
   const buttonHide = () =>{
      if(styles[1]){
         return
      }
      setStyles(prev =>[
         ...prev,
         'hide'
      ])
   }
   const buttonShow = () =>{
      setStyles([
         'filter__column'
      ])
   }
   return (
      <div className='filter'>
         <div className='filter__column'>
            <button className='filter__btn _active--btn' onClick={buttonShow}>Популярные</button>
            <button className='filter__btn' onClick={buttonHide}>Новинки</button>
         </div>
         <div className={styles.join(' ')}>
         <button className='filter__btn _active--btn'>Все</button>
         <button className='filter__btn'>месяц</button>
         <button className='filter__btn'>неделя</button>
         <button className='filter__btn'>день</button>
         </div>
         <div className='filter__column'>
         <button className='filter__btn _active--btn'>Все</button>
         <button className='filter__btn'>картинки</button>
         <button className='filter__btn'>медиа</button>
         </div>
      </div>
   )
}