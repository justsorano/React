import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card } from '../Parts/Card'
import {asyncPop} from '..//..//Redux/action'
const PopularPage = ({card,asyncPop}) =>{
   // useEffect(()=>{
   //    asyncPop()
   // },[])
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
const mapDispatchToProps = {
   asyncPop
}
export default connect(mapStateToProps,mapDispatchToProps)(PopularPage)