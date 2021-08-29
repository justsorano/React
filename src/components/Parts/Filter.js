import React from 'react'

export const Filter = () =>{
   return (
      <div className='filter'>
         <div className='filter__column'>
            <button className='filter__btn'>btn 1</button>
            <button className='filter__btn'>btn 2</button>
         </div>
         <div className='filter__column'>
         <button className='filter__btn'>btn 3</button>
         <button className='filter__btn'>btn 4</button>
         <button className='filter__btn'>btn 5</button>
         <button className='filter__btn'>btn 6</button>
         </div>
         <div className='filter__column'>
         <button className='filter__btn'>btn 7</button>
         <button className='filter__btn'>btn 8</button>
         <button className='filter__btn'>btn 9</button>
         </div>
      </div>
   )
}