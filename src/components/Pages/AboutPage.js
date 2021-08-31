import React from 'react'
import { NavLink } from 'react-router-dom'
export const AboutPage = () => (
   <div className='AboutPage'>
      <div className='AboutPage__content mb-5 me-5 ms-5'>
         <div class="p-2 mb-4 rounded-3">
            <div class="container-fluid py-5">
               <h1 class="display-5 fw-bold">Приветствую вас</h1>
               <p class="col-md-8 fs-4">Кратко расскажу о том чем я тут занимаюсь. Работаю для портфолио и для души.Пока ищу работу в сфере разработки паралельно изучаю новые фичи и библиотеки.</p>
               <NavLink class="btn btn-dark btn-lg" to='/'>Обратно на главную</NavLink>
            </div>
         </div>

         <div class="row align-items-md-stretch mb-4">
            <div class="col-md-6">
               <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Знания на данный момент</h2>
                  <p>На данный момент разрабатываю для практики и умения. Не хочу ограничиваться знаниями по front-end разработке. В данный момент не хватает практики в Redux</p>
               </div>
            </div>
            <div class="col-md-6">
               <div class="h-100 p-5 bg-light border rounded-3">
                  <h2>То к чему я стремлюсь</h2>
                  <p>Знать все не возможно и не нужно.Но я хочу овладеть в ближайшее время full stack разработкой и такими вещами как TypeScript и NodeJS + библиотеки и в дальнейшем я думаю попробовать себе еще в других фреймворках</p>
               </div>
            </div>
         </div>
      </div>
   </div>
)