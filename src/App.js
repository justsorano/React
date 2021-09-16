import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import {AboutPage} from './components/Pages/AboutPage'
import PopularPage from './components/Pages/PopularPage'
import {CardStats} from './components/Pages/CardStats'
import AuthPage from './components/Pages/AuthPage'
import { Footer } from './components/Parts/Footer'
import {Navbar} from './components/Parts/Navbar'
import RegistrationPage from './components/Pages/RegistrationPage'
function App() {
  const [user,setUser] = useState([])
  useEffect(() =>{
  setUser(localStorage.getItem('user'))
  },[])
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/popular' component={PopularPage}/>
        <Route path='/stats' component={CardStats}/>
        <Route path='/auth' component={AuthPage}/>
        <Route path='/Registration' component={RegistrationPage}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
