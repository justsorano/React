import React from 'react'
import {Filter} from '../Parts/Filter'
import { Search } from './Search'

export const FilterBar = () =>{
   const styles = {
      display:'flex',
      flexDerection:'row',
      alignItems:'center',
      margin:'35px 0 0 15px'
   }
   return (
      <div className='filterBar' style={styles}>
         <Filter/>
         <Search/>
      </div>
   )
}