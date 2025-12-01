import React from 'react'
import {useState} from 'react'
const Counter = () => {
const [count,SetCount]=useState(0);
    return (
    <div>
        {count}
        <button onClick={()=>SetCount(count+1)}>Increment</button>
        <button onClick={()=>SetCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter