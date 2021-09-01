import React from 'react'
export const AboutPage = () => (
   <div className='AboutPage'>
      <div className='AboutPage__content mb-5 me-5 ms-5'>
         <div className="p-2 mb-4 rounded-3">
            <div className="container-fluid py-5">
               <h1 className="display-5 fw-bold">Приветствую вас</h1>
               <p className="col-md-8 fs-4">Кратко расскажу о том чем я тут занимаюсь. Работаю для портфолио и для души. Пока ищу работу в сфере разработки паралельно изучаю новые фичи и библиотеки.</p>
               <a className="btn btn-dark btn-lg" href='https://www.piku.co.kr/' target='_blank' rel='noreferrer'>Сам сайт с которого я копирую</a>
            </div>
         </div>

         <div className="row align-items-md-stretch mb-4">
            <div className="col-md-6">
               <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Знания на данный момент</h2>
                  <p>На данный момент разрабатываю для практики и умения. Не хочу ограничиваться знаниями по front-end разработке. В данный момент не хватает практики в Redux</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="h-100 p-5 bg-light border rounded-3">
                  <h2>То к чему я стремлюсь</h2>
                  <p>Знать все не возможно и не нужно.Но я хочу овладеть в ближайшее время full stack разработкой и такими вещами как TypeScript и NodeJS + библиотеки и в дальнейшем я думаю попробовать себе еще в других фреймворках</p>
               </div>
            </div>
         </div>
      </div>
   </div>
)