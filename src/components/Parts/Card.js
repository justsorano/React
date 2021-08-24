import React from 'react'

export const Card = () =>{
   return (
      <div className='card'>
         <div className='card__body'>
         <div className='card__img'>
            <img alt='img1'/>
            <img alt='img2'/>
         </div>
         <div className='card__imgsubtitle'>
            <div>Card name</div>
            <div>Card name2</div>
         </div>
         <div className='card__title'>
         title text
         </div>
         <small className='card__subtitle'>
            subtitle text
         </small>
         <div className='card__btn'>
            <button className='card__btn--red'>click</button>
            <button className='card__btn--orange'>click</button>
            <button className='card__btn--blue'>click</button>
         </div>
         </div>
      </div>
   )
}