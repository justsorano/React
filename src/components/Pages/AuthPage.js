import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const AuthPage = () =>{
   const [user,setUser] = useState({email:'',password:''})

   const inputHandler = e =>{
         setUser(prev =>({...prev,[e.target.name]:e.target.value}))
   }
   const submitHandler = e =>{
      e.preventDefault()
      const log = [JSON.parse(localStorage.getItem('user'))] || []
      if(log.find(e => e.email === user.email)){
         
      }
   }
   return (
      <div className='auth'>
         <div className='auth__contant'>
            <div className='auth__img'>
               <span className='_icon-trophy'></span>
            </div>
            <h2 className='auth__title'>Welcome to Sora</h2>
            <div className='auth__subtitle'>Для того чтоб начать создавать новые чемпионаты нужно войти в систему</div>
            <div className='auth__subtitle'>Вы можете просто создать учетную запись, указав только свой адрес электронной почты. </div>
            <form className='auth__form' onSubmit={submitHandler}>
               <input className='auth__email' type='email' name='email' placeholder='Email' value={user.email} onChange={inputHandler}  />
               <input className='auth__pass' type='password' name='password' placeholder='Password' value={user.password} onChange={inputHandler}  />
               <div className='auth__btn--group'>
                  <button className='auth__btn--submit' type='submit'>Войти</button>
                  <Link className='auth__btn--reset' to='/Registration' >Регистрация</Link>
               </div>
            </form>
            <address className='auth__address'>Админ: выдуманнаяПочта@gmail.com</address>
            <a className='auth__privacy' href='/about'>политика конфиденциальности</a>
         </div>
      </div>
   )
}
export default connect(null,null)(AuthPage)