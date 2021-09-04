import React, { useState } from 'react'
import { connect } from 'react-redux'
import {hideModal} from '..//../Redux/action'
const Modal = ({hideModal,card}) =>{
   const [value,setValue] = useState('512')
   const handleChange = (e) =>{
      setValue(e.target.value)
   }
   const handleSubmit = (e) =>{
      alert(`вы выбрали ${value}`)
      e.preventDefault()
   }
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
            <form className='modal__row' onSubmit={handleSubmit}>
            <legend className='modal__choose'>Выберите раунд.</legend>
            <select className='modal__select' value={value} onChange={handleChange}>
               <option value='512'>512</option>
               <option value='256'>256</option>
               <option value='128'>128</option>
               <option value='64'>64</option>
               <option value='32'>32</option>
               <option value='16'>16</option>
               <option value='8'>8</option>
               <option value='4'>4</option>
            </select>
            <div className='modal__result'>В этом бою будет {value / 2} раунд(ов).</div>
            <div className='modal__btn--group'>
            <button className='modal__btn modal__btn--start' type='submit'>Старт</button>
            <button className='modal__btn modal__btn--reject' type='reset' onClick={hideModal}>Отмена</button>
            </div>
            </form>
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