import React from 'react'
import {useState} from 'react'
const User_input = () => {
  const [input,setInput]=useState("");
    return (
    <div>
        <input type="text" onChange={(e)=>
            setInput(e.target.value)
        }/>
        <p>user input is a : {input}</p>
    </div>
  )
}

export default User_input