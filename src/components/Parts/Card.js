import React from 'react'
import img1 from '..//..//assets/imgs/index.jpg'
import img2 from '..//../assets/imgs/images.jpg'
export const Card = () =>{
   return (
      <div className='card'>
         <div className='card__body'>
         <div className='card__img'>
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
         </div>
         <div className='card__imgsubtitle'>
            <div>Card name</div>
            <div>Card name2</div>
         </div>
         <a  href='#' className='card__title'>
         title text
         </a>
         <small className='card__subtitle'>
            subtitle text
         </small>
         <div className='card__btn'>
            <button className='card__btn--red'>Начать</button>
            <button className='card__btn--orange'>Статистика</button>
            <button className='card__btn--blue'>Поделиться</button>
         </div>
         </div>
      </div>
   )
}