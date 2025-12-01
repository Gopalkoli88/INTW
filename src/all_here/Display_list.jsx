import React from 'react'

const Display_list = () => {
    const item=['apple','banana','grape','mango'];
  return (
    <div>
<ul>
    {item.map((val,idx)=>{
        return <li key={idx}>{val}</li>
    })}
</ul>
    </div>
  )
}

export default Display_list