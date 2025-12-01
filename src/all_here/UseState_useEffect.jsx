import React, { useEffect, useState } from 'react'

const UseState_useEffect = () => {
    const[count,SetCount]=useState(0);
    useEffect(()=>{
        const intervalid=setInterval(()=>{
            SetCount(prevCount=>prevCount+1);

        },1000)
        return ()=>{
            clearInterval(intervalid);
            console.log("Timer cleared! Component unmounted.");
            
        }
    },[])
const increment=()=>SetCount(count+1);
const decrement=()=>SetCount(count-1);
const reset=()=>SetCount(0);
    return (
    <div>
        <h1>{count}</h1>
<button onClick={decrement}>decrement</button>
<button onClick={increment}>increment</button>
<button onClick={reset}>reset</button>

    </div>
  )
}

export default UseState_useEffect