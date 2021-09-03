import React from 'react'
import { connect } from 'react-redux'
import { Card } from '../Parts/Card'
const PopularPage = ({card}) =>{

   return (
      <div className='PopularPage'>
      <div className='PopularPage__content'>
      {card.filter(i => i.complited > 40)
      .map(item => <Card card={item} key={item.id} />)}
      </div>
   </div>
   )
}
const mapStateToProps = state =>({
   card:state.card
})

export default connect(mapStateToProps,null)(PopularPage)