import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../Parts/Card'
import Modal from '../Parts/Modal'
import {showModal} from '..//../Redux/action'
const HomePage = ({card,app,showModal}) =>{
   return (
      <main className='HomePage'>
         <div className='HomePage__content'>
         {app && <Modal/>}
            {card.map(i => <Card card={i} key={i.id} showModal={showModal}/>)}
         </div>
      </main>
   )
}
const mapStateToProps = state =>({
   card:state.card,
   app:state.app.modal
})
const mapDispatchToProps = ({
   showModal
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)