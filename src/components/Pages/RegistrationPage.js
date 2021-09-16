import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const AuthPage = () =>{
   const [user,setUser] = useState({email:'',password:'',repPass:''})

   const inputHandler = e =>{
         setUser(prev =>({...prev,[e.target.name]:e.target.value}))
   }
   return (
      <div className='auth'>
         <div className='auth__contant'>
            <div className='auth__img'>
               <span className='_icon-trophy'></span>
            </div>
            <h2 className='auth__title'>Регистрация в Sora</h2>
            <form className='auth__form'>
               <input className='auth__email' type='email' name='email' placeholder='Email' value={user.email} onChange={inputHandler}  />
               <input className='auth__pass' type='password' name='password' placeholder='Password' value={user.password} onChange={inputHandler}  />
               <input className='auth__pass' type='password' name='repPass' placeholder='Repeat password' value={user.password} onChange={inputHandler}  />
               <div className='auth__btn--group'>
                  <button className='auth__btn--submit' type='submit'>Регистрация</button>
                  <small>Забыли пароль?</small>
                  <Link className='auth__btn--reset' to='/'>Восстановить</Link>
               </div>
            </form>
         </div>
      </div>
   )
}
export default connect(null,null)(AuthPage)