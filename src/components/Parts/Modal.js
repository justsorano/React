import React from 'react'
import { connect } from 'react-redux'
import {hideModal} from '..//../Redux/action'
const Modal = ({hideModal}) =>{
   return (
      <div className='modal'>
         <div className='modal__body'>
            <div className='modal__row'>
            <div className='modal__img'>
               <span className='_icon-trophy'></span>
            </div>
            <div className='modal__title'>test test test test</div>
            <small className='modal__subtitle'>test test test test</small>
            </div>
            <div className='modal__row'>
            <div className='modal__choose'>Выберите раунд</div>
            <select>
               <option>64</option>
            </select>
            <div className='modal__result'>В этом раунде будет ;кол-во соперников;</div>
            </div>
            <div className='modal__row modal__btn--group'>
            <button>Старт</button>
            <button onClick={hideModal}>Отмена</button>
            </div>
         </div>
      </div>
   )
}
const mapDispatchToProsp = ({
   hideModal
})
export default connect(null,mapDispatchToProsp)(Modal)