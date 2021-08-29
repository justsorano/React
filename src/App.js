import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import {AboutPage} from './components/Pages/AboutPage'
import PopularPage from './components/Pages/PopularPage'
import { Footer } from './components/Parts/Footer'
import {Navbar} from './components/Parts/Navbar'
import {FilterBar} from './components/Parts/FilterBar'
function App() {
  return (
    <Router>
    <Navbar/>
    <FilterBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/popular' component={PopularPage}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
