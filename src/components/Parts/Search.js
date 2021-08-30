import React, { useState } from 'react'


export const Search = () =>{
   const [value,setValue] = useState({
      search:''
   })
   const SumbitHandler = (e) =>{
      e.preventDefault()
      const str = value
      console.log(str)
      setValue({
         search:''
      })
      }
   const inputHandler = (e) =>{
      setValue(prev =>({
         ...prev,
         [e.target.name]:e.target.value
      }))
   }
   return (
      <div className='search'>
         <form className='search__form' onSubmit={SumbitHandler}>
            <input className='search__search' type='search' name='search' placeholder='Напишите запрос для поиска' value={value.search} onChange={inputHandler}/>
            <button className='search__pushbtn'>Найти</button>
         </form>
      </div>
   )
}