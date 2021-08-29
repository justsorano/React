import React from 'react'
export const Card = ({card}) =>{
   return (
      <div className='card'>
         <div className='card__body'>
         <div className='card__img'>
         <img src={`./imgs/${card.info.imgs[0]}.jpg`} alt='wrapper'/>
         <img src={`./imgs/${card.info.imgs[1]}.jpg`} alt='wrapper'/>
         </div>
         <div className='card__imgsubtitle'>
            <div>{card.imgtitle1}</div>
            <div>{card.imgtitle2}</div>
         </div>
         <a  href='#' className='card__title'>
         {card.info.title}
         </a>
         <small className='card__subtitle'>
            {card.info.subtitle}
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