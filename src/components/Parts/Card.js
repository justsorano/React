import React from 'react'
import {NavLink} from 'react-router-dom'
export const Card = ({card,showModal}) =>{
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
         <NavLink  to='/' className='card__title'>
         {card.info.title}
         </NavLink>
         <small className='card__subtitle'>
            {card.info.subtitle}
         </small>
         <div className='card__btn'>
            <button className='card__btn--red _icon-play' onClick={showModal}>Начать</button>
            <button className='card__btn--orange _icon-menu'>Статистика</button>
            <button className='card__btn--blue _icon-share'>Поделиться</button>
         </div>
         </div>
      </div>
   )
}