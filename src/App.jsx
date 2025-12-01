import React from 'react'
import Hello from './all_here/Hello'
import Counter from './all_here/Counter'
import User_input from './all_here/User_input'
import Display_list from './all_here/Display_list'
import Toggle_switch from './all_here/Toggle_switch'
import Fatech_Data from './all_here/Fatech_Data'
import Routing from './all_here/Routing'
import SerchBar from './all_here/SerchBar'
import Pagination from './all_here/Pagination'
import UseState_useEffect from './all_here/UseState_useEffect'
import Search_filter from './all_here/Search_filter'

const App = () => {
  const items=["gopal","kumar","singh","rahul","yadav"]
  return (
    
    <div>
      <Hello />
      <p>-----------------------------------------</p>

      <Counter />
      <p>-----------------------------------------</p>
      <User_input />
      <p>-----------------------------------------</p>
      <Display_list />
      <p>-----------------------------------------</p>
      <Toggle_switch />
      <p>-----------------------------------------</p>
      <Fatech_Data />
      <p>-----------------------------------------</p>
      <Routing />
      <p>-----------------------------------------</p>
      <SerchBar items={items}/>
      <p>-----------------------------------------</p>
      <Pagination items={items} itemsParPage={2}/>
      <p>-----------------------------------------</p>
      <UseState_useEffect/>
      <p>-----------------------------------------</p>
<Search_filter/>
          </div>
  )
}

export default App