import React from 'react'
import { connect } from 'react-redux'
import {hideModal} from '..//../Redux/action'
const Modal = ({hideModal,card}) =>{
   console.log(card);
   return (
      <div className='modal'>
         <div className='modal__body'>
            <div className='modal__row'>
            <div className='modal__img'>
               <span className='_icon-trophy'></span>
            </div>
            <div className='modal__title'>{card[0].info.title}</div>
            <small className='modal__subtitle'>{card[0].info.subtitle}</small>
            </div>
            <div className='modal__row'>
            <div className='modal__choose'>Выберите раунд.</div>
            <select className='modal__select'>
               <option value='128'>128</option>
               <option value='64'>64</option>
               <option value='32'>32</option>
               <option value='16'>16</option>
               <option value='8'>8</option>
               <option value='4'>4</option>
            </select>
            <div className='modal__result'>В этом бою будет {card[0].info.imgs.length / 2} раунд(ов).</div>
            </div>
            <div className='modal__row'>
            <button className='modal__btn modal__btn--start'>Старт</button>
            <button className='modal__btn modal__btn--reject' onClick={hideModal}>Отмена</button>
            </div>
         </div>
      </div>
   )
}
const mapStateToProps = state =>({
   card:state.card
})
const mapDispatchToProsp = ({
   hideModal
})
export default connect(mapStateToProps,mapDispatchToProsp)(Modal)