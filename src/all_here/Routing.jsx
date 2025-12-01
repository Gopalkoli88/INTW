import React from 'react'
import { BrowserRouter, Link, Route ,Routes} from 'react-router-dom'
import Home from './forRoutes/Home'
import About from './forRoutes/About'
import Contact from './forRoutes/Contact'   
const Routing = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>home</Link></li>
            <li><Link to='/contact'>home</Link></li>
        </ul>
    </nav>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>   
    </Routes>
    </BrowserRouter>

  )
}

export default Routing