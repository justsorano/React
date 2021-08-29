import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../Parts/Card'
const HomePage = ({card}) =>{
   return (
      <main className='HomePage'>
         <div className='HomePage__content'>
            {card.map(i => <Card card={i} key={i.id} />)}
         </div>
      </main>
   )
}
const mapStateToProps = state =>({
   card:state.card
})
export default connect(mapStateToProps,null)(HomePage)