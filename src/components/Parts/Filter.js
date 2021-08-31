import React,{useRef} from 'react'
   // hot-1 первая кнопка которая показывает еще два фильтра по новизне за какое то кол во дней и в каком формате будет  тест
   // new-2 вторая кнопка будет показывать только одну доп колонку с выбором все\картинки\видео тесты
export const Filter = () =>{
   const column = useRef(null)
   const buttonHide = () =>{
      console.log(column.current);
   }
   return (
      <div className='filter'>
         <div className='filter__column'>
            <button className='filter__btn hot-1'>Популярные</button>
            <button className='filter__btn new-2' onClick={buttonHide}>Новинки</button>
         </div>
         <div className='filter__column' ref={column}>
         <button className='filter__btn'>Все</button>
         <button className='filter__btn'>За месяц</button>
         <button className='filter__btn'>За неделю</button>
         <button className='filter__btn'>За день</button>
         </div>
         <div className='filter__column'>
         <button className='filter__btn'>Все</button>
         <button className='filter__btn'>В картинках</button>
         <button className='filter__btn'>В видео</button>
         </div>
      </div>
   )
}