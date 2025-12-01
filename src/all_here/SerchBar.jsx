import React from 'react'
import { useState } from 'react'
const SerchBar = ({items}) => {
  const [serchbar,setSerchbar]=useState('')
  const filterdItems = items.filter((item) =>
    item.toLowerCase().includes(serchbar.toLowerCase())
  );
  return (
    <div>
      <input type="text" placeholder='Search...' onChange={(e)=>setSerchbar(e.target.value)} />
<ul>{
  filterdItems.map((item,index)=>(
    <li key={index}>{item}</li>
  ))
}
</ul>
    </div>
  )
}

export default SerchBar